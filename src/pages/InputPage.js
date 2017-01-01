import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import AutoGrowTextInput from '../blocks/AutoGrowTextInput';
import SnapshotTextView from '../components/SnapshotTextView';
import {Actions} from 'react-native-router-flux';

export default class Editor extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      inputText: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={[styles.container, {marginBottom: 50}]} keyboardDismissMode='on-drag' keyboardShouldPersistTaps={true}>
          <View style={styles.textEditorContainer}>
            <AutoGrowTextInput style={styles.textEditor} autoFocus onChangeText={inputText => this.setState({inputText})}
                               placeholder="Write text to convert into image"/>
          </View>
        </ScrollView>

        <TouchableHighlight onPress={this.takeSnapshot} style={styles.bottomContainer}>
          <Text style={styles.bottomViewText}>Imagify></Text>
        </TouchableHighlight>

        <SnapshotTextView ref={(comp) => { this.snapshotView = comp; } }/>

      </View>
    );
  }

  takeSnapshot = () => {
    const {inputText} = this.state;
    if ( !inputText ) {
      return;
    }
    this.snapshotView.imagify( { text: inputText }, imageUri => Actions.previewPage( { imageUri, inputText } ) );
  }
}

const styles = StyleSheet.create( {
  container          : {
    flex: 1
  },
  textEditor         : {
    fontSize: 18
  },
  textEditorContainer: {
    flex:1,
    paddingTop: 30,
    paddingBottom: 200,
    margin: 16
  },
  bottomContainer    : {
    position       : 'absolute',
    bottom         : 0,
    left           : 0,
    right          : 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 10,
    alignItems     : 'center',
    justifyContent : 'center'
  },
  bottomViewText     : {
    fontSize  : 20,
    color     : 'white',
    fontWeight: '500',
  }
} );
