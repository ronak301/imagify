import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import codePush from "react-native-code-push";
import Router from './router';
import Share from './pages/share';

console.disableYellowBox = true;

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class Root extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden />
        <Router />
      </View>
    );
  }
}

Root = codePush(codePushOptions)(Root);

AppRegistry.registerComponent( 'imagify', () => Root );
AppRegistry.registerComponent('TextShareExtension', () => Share);
