/**
 * Created by ronakkothari1 on 30/12/16.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Slider,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import AutoGrowTextInput from '../blocks/AutoGrowTextInput';
import SnapshotTextView from '../components/SnapshotTextView';

export default class PreviewPage extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      fontSize       : 14,
      fontColor      : 'black',
      backgroundColor: 'rgb(250,250,250)',
      previewUri     : props.imageUri
    }
  }

  render() {
    const {previewUri} = this.state;
    return (
      <View style={styles.container}>

        <Image style={styles.previewImage} source={{uri: previewUri}} resizeMode={'center'}/>

        {this.renderTexSizer()}

        {this.renderColorPicker()}

        <SnapshotTextView ref={(comp) => { this.snapshotView = comp } }/>

        <TouchableHighlight onPress={this.shareImage} style={styles.bottomContainer}>
          <Text style={styles.bottomViewText}>Share></Text>
        </TouchableHighlight>

      </View>
    );
  }

  renderTexSizer = () => {
    const {fontSize} = this.state;

    return (
      <View>
        <Slider style={styles.textSizeSlider}
                value={fontSize}
                minimumValue={12}
                maximumValue={40}
                onSlidingComplete={fontSize => this.setState({fontSize}, this.updateSnapshot)}/>
      </View>
    );
  };

  renderColorPicker = () => {
    const colors = [ 'black', 'blue', 'red', 'green', 'cyan' ];
    const pickers = _.map( colors, color =>
      <TouchableHighlight underlayColor={'transparent'} onPress={()=> this.setState({fontColor: color}, this.updateSnapshot)}>
        <View style={[styles.colorPicker, {backgroundColor: color}]}/>
      </TouchableHighlight>
    );

    return (
      <View style={styles.colorPickerContainer}>
        {pickers}
      </View>
    );
  };

  updateSnapshot = () => {
    const {inputText} = this.props;
    const { fontSize, fontColor, backgroundColor } = this.state;

    this.snapshotView.imagify( { text: inputText, fontSize, fontColor, backgroundColor }, previewUri => this.setState( { previewUri } ) );
  };

  shareImage = () => {
  }

}

const styles = StyleSheet.create( {
  container           : {
    flex      : 1,
    alignItems: 'center',
  },
  previewImage        : {
    height: Dimensions.get( 'window' ).width,
    width : Dimensions.get( 'window' ).width,
  },
  textSizeSlider      : {
    marginTop: 16,
    width    : 300,
  },
  colorPickerContainer: {
    marginTop    : 16,
    flexDirection: 'row',
  },
  colorPicker         : {
    width           : 50,
    height          : 50,
    borderRadius    : 25,
    marginHorizontal: 8,
  },
  bottomContainer     : {
    position       : 'absolute',
    bottom         : 0,
    left           : 0,
    right          : 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: 10,
    alignItems     : 'center',
    justifyContent : 'center'
  },
  bottomViewText      : {
    fontSize  : 20,
    color     : 'white',
    fontWeight: '500',
  }

} );
