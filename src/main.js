import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Router from './router';

console.disableYellowBox = true;

class Root extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <Router />
      </View>
    );
  }
}

AppRegistry.registerComponent( 'imagify', () => Root );
