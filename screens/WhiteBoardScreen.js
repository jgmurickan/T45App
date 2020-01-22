import React, { Component } from 'react';
import {ScrollView, View, ViewPropTypes, Text, Picker, StyleSheet, Linking, Alert, Dimensions, Platform} from 'react-native';
import PropTypes from 'prop-types';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PDFReader from 'rn-pdf-reader-js';
import { ThemeProvider, Button } from 'react-native-elements';


class DropdownScreen extends Component {

  state = {strike_stage: '163', e2_stage: '175', link: ''}
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
          buttonStyle={{borderRadius: 100, backgroundColor: 'grey'}}
          title= 'Open Syllabus'
          titleStyle={{fontWeight: 'bold'}}
          onPress={ () => this.props.navigation.navigate('Strike', {page: this.state.strike_stage}) }
      />


      <Text style = {styles.getStartedText}> E2/C2 </Text>
      <Picker selectedValue = {this.state.e2_stage} onValueChange = {this.updateE2}>
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
          buttonStyle={{borderRadius: 100, backgroundColor: 'black'}}
          title= 'Open Syllabus'
          titleStyle={{fontWeight: 'bold'}}
          onPress={ () => this.props.navigation.navigate('E2C2', {page: this.state.e2_stage}) }
      />
    </ScrollView>
    );
  }
}

class Strike extends Component {
  
  render() {
    const pg = this.props.navigation.getParam('page', '')
    if(pg == '163') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/r19llskv8ago2nw/BI_STRIKE.pdf?dl=0'  }} />); }
    if(pg == '172') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/kqxutg3rt22g2c4/RI_STRIKE.pdf?dl=0' }} />); }
    if(pg == '87')  { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/tbp3ugaztpjr8i7/FAM_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '99')  { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/ucyduraxii6g84d/OCF41_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '180') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/alemiovreq56b33/AN_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '186') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/gvie7ev0dg6f1ns/IR_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '218') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/dd0qpl1wn7v9r5g/FRM_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '223') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/gbrnol1jelrrbey/CRUISE_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '228') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/8ev738fwsjlmxv8/DIV_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '110') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/fd7kgnhg2n1dhup/NFM_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '117') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/wiih5id3q34brcm/FCL_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '235') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/0iwq9soaluvqf64/NFR_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '195') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/7ygw7h1uj7owuc3/ADVANCEDAN_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '269') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/c0smkvdltssyhfq/ON_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '275') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/box4z6ehhfjfvj0/RR_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '284') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/b8ffpucmd14h9lv/STK_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '295') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/5a3ck41z1us70x1/TAC_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '305') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/unii9a2inm2biyy/OCF42_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '307') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/kabims1g4c3mg2o/BFM_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '321') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/ts269l8cvzf22n9/SEM_STRIKE.pdf?dl=0' }}/>); }
    if(pg == '325') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/x9mu5cam9knhrjt/CQ_STRIKE.pdf?dl=0' }}/>); }
    
    return (<Text>Unable to display PDF</Text>)
    
  }
}

class E2C2 extends Component {
  
  render() {
    const pg = this.props.navigation.getParam('page', '')
    if(pg == '175') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/jeom3jdmwpzo57m/BI_E2C2.pdf?dl=0'  }} />); }
    if(pg == '184') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/t8nchgmhhozapaf/RI_E2C2.pdf?dl=0' }} />); }
    if(pg == '98')  { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/8l7dc122l8q1f9q/FAM_E2C2.pdf?dl=0' }}/>); }
    if(pg == '110') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/kus94pfz1d6dp0q/OCF41_E2C2.pdf?dl=0' }}/>); }
    if(pg == '192') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/k2p64qwx0sko7vi/AN_E2C2.pdf?dl=0' }}/>); }
    if(pg == '198') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/ms3ref1715dtx2u/IR_E2C2.pdf?dl=0' }}/>); }
    if(pg == '220') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/dph1ragtfc43fap/FRM_E2C2.pdf?dl=0' }}/>); }
    if(pg == '227') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/ucbk5itw667tvg5/CRUISE_E2C2.pdf?dl=0' }}/>); }
    if(pg == '232') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/4psmp7njcl6cfdo/DIV_E2C2.pdf?dl=0' }}/>); }
    if(pg == '124') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/9k5nj33r0s9owal/NFM_E2C2.pdf?dl=0' }}/>); }
    if(pg == '132') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/5k44e9k1n1067a7/FCL_E2C2.pdf?dl=0' }}/>); }
    if(pg == '240') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/yufk6ngsmiqzped/NFR_E2C2.pdf?dl=0' }}/>); }
    if(pg == '249') { return (<PDFReader source={{ uri: 'https://dl.dropboxusercontent.com/s/zzbvb8sf596em3w/CQ_E2C2.pdf?dl=0' }}/>); }
    
    return (<Text>Unable to display PDF</Text>)
    
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
  headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
    },
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
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
