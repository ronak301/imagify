import React, { Component } from 'react';
import { AppRegistry, View, StatusBar } from 'react-native';
import Router from './router';

console.disableYellowBox = true;

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

AppRegistry.registerComponent( 'imagify', () => Root );
