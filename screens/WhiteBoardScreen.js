import React, { Component } from 'react';
import {ScrollView, View, ViewPropTypes, Text, Picker, StyleSheet, Button, Linking, Alert, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PDFReader from 'rn-pdf-reader-js';


class DropdownScreen extends Component {

  state = {strike_stage: '', e2_stage: '', link: ''}
  updateStrike = (stage) => {
      this.setState({ strike_stage: stage })
   }
  updateE2 = (stage) => {
      this.setState({ e2_stage: stage })
  }

  render() {
    return (
    <ScrollView>
      <Text style = {styles.getStartedText}> Strike </Text>
      <Picker selectedValue = {this.state.strike_stage} onValueChange = {this.updateStrike}>
         <Picker.Item label = "" value = "" />
         <Picker.Item label = "BI" value = "163" />
         <Picker.Item label = "RI" value = "172" />
         <Picker.Item label = "FAM" value = "87" />
         <Picker.Item label = "OCF41" value = "99" />
         <Picker.Item label = "AN" value = "180" />
         <Picker.Item label = "IR" value = "186" />
         <Picker.Item label = "FRM" value = "218" />
         <Picker.Item label = "CRUISE" value = "223" />
         <Picker.Item label = "DIV" value = "228" />
         <Picker.Item label = "NFM" value = "110" />
         <Picker.Item label = "FCL" value = "117" />
         <Picker.Item label = "NFR" value = "235" />
         <Picker.Item label = "ADVANCED AN" value = "195" />
         <Picker.Item label = "ON" value = "269" />
         <Picker.Item label = "RR" value = "275" />
         <Picker.Item label = "STK" value = "284" />
         <Picker.Item label = "TAC" value = "295" />
         <Picker.Item label = "OCF42" value = "305" />
         <Picker.Item label = "BFM" value = "307" />
         <Picker.Item label = "SEM" value = "321" />
         <Picker.Item label = "CQ" value = "325" />
      </Picker>
      <Button
          title= 'Open Syllabus'
          onPress={ () => this.props.navigation.navigate('Strike', {page: this.state.strike_stage}) }
      />

      <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
       }}
      />
      <Text style = {styles.getStartedText}> E2/C2 </Text>
      <Picker selectedValue = {this.state.e2_stage} onValueChange = {this.updateE2}>
         <Picker.Item label = "" value = "" />
         <Picker.Item label = "BI" value = "175" />
         <Picker.Item label = "RI" value = "184" />
         <Picker.Item label = "FAM" value = "98" />
         <Picker.Item label = "OCF" value = "110" />
         <Picker.Item label = "AN" value = "192" />
         <Picker.Item label = "IR" value = "198" />
         <Picker.Item label = "FRM" value = "220" />
         <Picker.Item label = "CRUISE" value = "227" />
         <Picker.Item label = "DIV" value = "232" />
         <Picker.Item label = "NFM" value = "124" />
         <Picker.Item label = "FCL" value = "132" />
         <Picker.Item label = "NFR" value = "240" />
         <Picker.Item label = "CQ" value = "249" />
      </Picker>
      <Button
          title= 'Open Syllabus'
          onPress={ () => this.props.navigation.navigate('E2C2', {page: this.state.e2_stage}) }
      />
    </ScrollView>
    );
  }
}

class Strike extends Component {
  
  render() {
    const pg = this.props.navigation.getParam('page', '')
    return (
      <PDFReader
        source={{
          uri: 'https://cnatra.navy.mil/local/docs/instructions/1542.167.pdf#page' + pg,
        }}
      />
    )
  }
}

class E2C2 extends Component {
  
  render() {
    const pg = this.props.navigation.getParam('page', '')
    return (
      <PDFReader
        source={{
          uri: 'https://cnatra.navy.mil/local/docs/instructions/1542.176.pdf#page' + pg,
        }}
      />
    )
  }

}

const RootStack = createStackNavigator(
  {
    Dropdown: DropdownScreen,
    Strike: Strike,
    E2C2: E2C2
  },
  {
    initialRouteName: 'Dropdown',
  }
);

const AppContainer = createAppContainer(RootStack);


export default function WhiteBoardScreen() {
  return (
    <AppContainer/>
  );
}

WhiteBoardScreen.navigationOptions = {
  title: 'Syllabus Notes & Discuss Items',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerRefresh: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    paddingTop: 20,
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
