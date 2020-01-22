import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TOLDScreen from '../screens/TOLDScreen';
import WhiteBoardScreen from "../screens/WhiteBoardScreen"
import EPScreen from '../screens/EPScreen';
import GougeScreen from '../screens/GougeScreen'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    TOLD: TOLDScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'TOLD',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calculator' : 'md-calculator'} />
  ),
};

LinksStack.path = '';

const WhiteBoardStack = createStackNavigator(
  {
    WhiteBoard: WhiteBoardScreen,
  },
  config
);

WhiteBoardStack.navigationOptions = {
  tabBarLabel: 'White Board',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-easel' : 'md-easel'} />
  ),
};

WhiteBoardStack.path = '';

const EPStack = createStackNavigator(
  {
    EP: EPScreen,
  },
  config
);

EPStack.navigationOptions = {
  tabBarLabel: 'EPs & Limits',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-speedometer' : 'md-speedometer'} />
  ),
};

EPStack.path = '';

const GougeStack = createStackNavigator(
  {
    Gouge: GougeScreen,
  },
  config
);

GougeStack.navigationOptions = {
  tabBarLabel: 'Gouge',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'} />
  ),
};

GougeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  WhiteBoardStack,
  EPStack,
  GougeStack,
});

tabNavigator.path = '';

export default tabNavigator;
