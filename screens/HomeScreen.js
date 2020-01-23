import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import { SplashScreen } from 'expo';

import { MonoText } from '../components/StyledText';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>

          <Text style={styles.getStartedText}>Goshawk Ball</Text>

        </View>

          <Button onPress={handle22FrontPagePress} 
              style={styles.helpLink}
              buttonStyle={{backgroundColor: '#00264d'}}
              title="VT-22 Front Page"
              titleStyle={{fontWeight: 'bold'}}>
          </Button>


          <Button onPress={handle21FrontPagePress} 
              style={styles.helpLink}
              buttonStyle={{backgroundColor: 'grey'}}
              title="VT-21 Front Page"
              titleStyle={{fontWeight: 'bold'}}>
          </Button>



          <Button onPress={handle9FrontPagePress} 
              style={styles.helpLink}
              buttonStyle={{backgroundColor: '#00264d'}}
              title="VT-9 Front Page"
              titleStyle={{fontWeight: 'bold'}}>
          </Button>



          <Button onPress={handle7FrontPagePress} 
              style={styles.helpLink}
              buttonStyle={{backgroundColor: 'grey'}}
              title="VT-7 Front Page"
              titleStyle={{fontWeight: 'bold'}}>
          </Button>

        <View>
          <Image
            style = {{
              // marginTop: deviceHeight/15,
              // paddingTop: deviceHeight/3,
              // justifyContent: 'center',
              // alignItems: 'center',
              flex: 1
            }}
            source={require('../assets/images/t-45.png')}
            resizeMode="contain"
          />
        </View>

      </ScrollView>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

function handle22FrontPagePress() {
  var d = new Date();
  var year = d.getFullYear();
  var month = parseInt(d.getMonth())+1;
  var date = parseInt(d.getDate());
  if(month<10) {month = '0'+month}
  if(date<10) {date = '0'+date}

  var s = 'https://www.cnatra.navy.mil/scheds/tw2/SQ-VT-22/!' + year + '-' + month + '-' + date + '!VT-22!Frontpage.pdf';

  WebBrowser.openBrowserAsync(
    s
  );
}

function handle21FrontPagePress() {
  var d = new Date();
  var year = d.getFullYear();
  var month = parseInt(d.getMonth())+1;
  var date = parseInt(d.getDate());
  if(month<10) {month = '0'+month}
  if(date<10) {date = '0'+date}

  var s = 'https://www.cnatra.navy.mil/scheds/tw2/SQ-VT-21/!' + year + '-' + month + '-' + date + '!VT-21!Frontpage.pdf';

  WebBrowser.openBrowserAsync(
    s
  );
}

function handle7FrontPagePress() {
  var d = new Date();
  var year = d.getFullYear();
  var month = parseInt(d.getMonth())+1;
  var date = parseInt(d.getDate());
  if(month<10) {month = '0'+month}
  if(date<10) {date = '0'+date}

  var s = 'https://www.cnatra.navy.mil/scheds/tw1/SQ-VT-7/!' + year + '-' + month + '-' + date + '!VT-7!Frontpage.pdf';

  WebBrowser.openBrowserAsync(
    s
  );
}

function handle9FrontPagePress() {
  var d = new Date();
  var year = d.getFullYear();
  var month = parseInt(d.getMonth())+1;
  var date = parseInt(d.getDate());
  if(month<10) {month = '0'+month}
  if(date<10) {date = '0'+date}

  var s = 'https://www.cnatra.navy.mil/scheds/tw1/SQ-VT-9/!' + year + '-' + month + '-' + date + '!VT-9!Frontpage.pdf';

  WebBrowser.openBrowserAsync(
    s
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginTop:50,
    paddingTop:50,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00264d',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#00264d',
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
});
