import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import RNViewShot from "react-native-view-shot";

export default class SnapshotTextView extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      text    : '',
      fontSize: 14
    }
  }

  render = () => {
    const {text, fontSize, fontColor} = this.state;

    return (
      <View pointerEvents="none" style={styles.container}>
        <View ref={(comp) => { this.shadowView = comp; } }>
          <Image style={[styles.imageEditorContainer]}>
            <Text style={{fontSize: fontSize, color: fontColor}}>{text}</Text>
          </Image>
        </View>
      </View>
    );
  };

  imagify = ( {text, fontSize, fontColor}, callback ) => {
    const that = this;
    that.setState( { text, fontSize, fontColor }, _.partial( that.queueSnapshot, callback ) );
  };

  queueSnapshot = ( callback ) => {
    setTimeout( () => {
      this.takeSnapshot( callback )
    }, 200 )
  };

  takeSnapshot = ( callback ) => {
    const that = this;
    RNViewShot.takeSnapshot( that.shadowView, {
        format : "jpeg",
        quality: 0.8
      } )
      .then(
        uri => {
          console.log( "Image saved to", uri );
          callback( uri );
        },
        error => console.error( "Oops, snapshot failed", error )
      );
  }

}

const styles = StyleSheet.create( {
  container           : {
    opacity: 0,
    padding: 16
  },
  imageEditorContainer: {
    height        : 150,
    width         : 300,
    borderRadius  : 4,
    borderWidth   : 1,
    borderColor   : 'black',
    alignItems    : 'center',
    justifyContent: 'center'
  }
} );
