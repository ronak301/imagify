import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight
} from 'react-native';
import AutoGrowTextInput from '../blocks/AutoGrowTextInput';
// import RNViewShot from "react-native-view-shot";

export default class Editor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView  ref={(comp) => { this.textEditor = comp; } }  contentContainerStyle={styles.container} style={{flex:1}} keyboardDismissMode='on-drag' keyboardShouldPersistTaps={true}>
          <View style={styles.textEditorContainer}><AutoGrowTextInput style={styles.textEditor} placeholder="Write Something"/></View>
        </ScrollView>
        <TouchableHighlight onPress={this.imagify} style={styles.bottomContainer}><Text style={styles.bottomViewText}>Imagify ></Text></TouchableHighlight>
      </View>
    );
  }

  imagify = () => {
  // RNViewShot.takeSnapshot(this.textEditor, {
  //   format: "jpeg",
  //   quality: 0.8
  //   })
  //   .then(
  //     uri => console.log("Image saved to", uri),
  //     error => console.error("Oops, snapshot failed", error)
  //   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  textEditor: {
    fontSize: 18
  },
  textEditorContainer: {
    margin: 20,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomViewText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  }
});
