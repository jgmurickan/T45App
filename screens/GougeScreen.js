import React, {Component} from 'react';
import { View, ScrollView, Image, Text, Modal, TouchableHighlight } from 'react-native';
import { Linking } from 'expo';
import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {

    containerViewStyle: {
      borderRadius:25,
    },
    buttonStyle: {
      borderRadius:25,
    },

  }
};

class Gouge extends Component {

  render() {
    return (
      <View style={{marginTop: 22}}>

        <Text style={{fontSize: 8}}>Use gouge at your own risk!!</Text>
        <Text/>

        <ThemeProvider theme = {theme}>
          <Button
            title="Question of the Day Bank 1"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://docs.google.com/document/d/1-mOFlmgAExHFtkTfacK5lqwrKmw9OONQWQIMi1dZNNM/edit?ts=5e264725');
            }}/>

          <Button 
            style={{marginTop: 22}}
            title="Question of the Day Bank 2"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://docs.google.com/document/d/1js1L_g-HqqA3ivHGTbOFhz9yhlLZUMdmAlhu_lROZgo/edit?usp=sharing');
            }}/>


          <Button
            style={{marginTop: 22}}
            title="Question of the Day Bank 3"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B5CKEzXvwUc6SHJUT0xwSzkzRlZfUDA4clA4QlpLd1ZadWM4/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Kingsville Course Rules Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B5CKEzXvwUc6ZjJQMWhQaHFaYnpDRXN1aVk0aUZPZk4wTXFr');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="System Numbers"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=1kfcNV3I9ekyM7YuA3skyH60luB6uUham');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Maintenance Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B0HyQxUFXATPVFpTTzlaRTJNVGc');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Preflight Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1FVRf7CDShcu1Nv9J3AZVtQhg4gt6oPIX/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="ECS Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=1Eb8ZASwznyPW5yo97Fr1mLwNGuLDhQv4');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Electrical Diagram"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=1vt6xKHoIXwqwD7aFQ-PbuzevgLuGkqK0');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Engine + Accessory Gear Box Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1T6o-qnG39d7kZCQa-8aN_8Fe6G-IszjT/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Airspace Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPTkxpZnRqWWQ5VE0/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="BI Maneuvers"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPVENCRkJqZXJIXzA/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="FAM Maneuvers"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPdDVwdkhGb2dhWFU/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="Landing Pattern Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1jZD9kpOnGw16Eab-gzkSBXLFLvJRLWwK/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="OCF Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B0HyQxUFXATPbTN5ZmRJTjFOUmc');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="FRM Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPcXR6Ny01Z3JYbUE/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="NFM Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1obGG92_8pEHyyLm5Pximwn72GNZkRKKp/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="DIV Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B0HyQxUFXATPTXROdU1zSl9Qc00');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="ONAV Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1xhtFxz3mbtCBik4Rs47mBNFq8cKsUn5b/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="NFR Gouge 1"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1iOclw7Ec92Yx6hrLlLyRPboV64t5_Vjn/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="NFR Gouge 2"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B0HyQxUFXATPRHBWbHZ3ZEpUWm8');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="TAC FORM Gouge 1"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B0HyQxUFXATPV2VPVi1UdVZuVGc');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="TAC FORM Gouge 2"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1ag1BWL4xbs2eoh59NK2SSMS0oudfN9kX/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="STK Gouge 1"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/15o7w-XIMgjcyzstGT_T5hyWUWRCbQire/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="STK Gouge 2"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1aH04_7WXoGVir7emoO9ufWmfUFUvo7Yn/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="RR Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/1XCDNYaqgjKqaHpF-thLD0EFEHRXvme3I/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="BFM Gouge 1"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/open?id=0B0HyQxUFXATPVDJqd1VFT1Uza3M');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="BFM Gouge 2"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPYWhTenU3cTVpTEk/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="BFM Gouge 3"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPNEpjcElza2JQeUE/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="SEM Gouge"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPZVN5V3luYmhTUUU/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="CQ Gouge 1"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPTTk0SW9FMHBkMmM/view?usp=sharing');
            }}/>

            <Button
            style={{marginTop: 22}}
            title="CQ Gouge 2"
            titleStyle={{fontWeight: 'bold'}}
            onPress={() => {
              Linking.openURL('https://drive.google.com/file/d/0B0HyQxUFXATPeExtbGRpcU9yNHc/view?usp=sharing');
            }}/>
          </ThemeProvider>
      </View>
    );

  }

}


export default function GougeScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <ScrollView>
      <Gouge/>
    </ScrollView>

  		);
}

GougeScreen.navigationOptions = {
  title: 'Gouge',
  headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
    },
};
