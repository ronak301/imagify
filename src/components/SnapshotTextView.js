import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
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
    const {text, fontSize, fontColor, backgroundColor} = this.state;

    return (
      <View pointerEvents="none" style={styles.container}>
        <View ref={(comp) => { this.shadowView = comp; } }>
          <Image style={[styles.imageEditorContainer, {backgroundColor}]}>
            <Text style={{fontSize: fontSize, color: fontColor}}>{text}</Text>
          </Image>
        </View>
      </View>
    );
  };

  imagify = ( {text, fontSize, fontColor, backgroundColor}, callback ) => {
    const that = this;
    that.setState( { text, fontSize, fontColor, backgroundColor }, _.partial( that.queueSnapshot, callback ) );
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
  },
  imageEditorContainer: {
    height        : Dimensions.get( 'window' ).width,
    width         : Dimensions.get( 'window' ).width,
    alignItems    : 'center',
    justifyContent: 'center'
  }
} );
