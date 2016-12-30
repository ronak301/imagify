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

        <ScrollView contentContainerStyle={styles.container} style={{flex:1}} keyboardDismissMode='on-drag' keyboardShouldPersistTaps={true}>
          <View style={styles.textEditorContainer}>
            <AutoGrowTextInput style={styles.textEditor} autoFocus onChangeText={inputText => this.setState({inputText})} placeholder="Write Something"/>
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

    this.snapshotView.imagify( inputText );
  }

}

const styles = StyleSheet.create( {
  container          : {
    flex          : 1,
    justifyContent: 'space-between'
  },
  textEditor         : {
    fontSize: 18
  },
  textEditorContainer: {
    margin: 20,
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
