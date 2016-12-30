import React, { PropTypes } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styles from './AutoGrowTextInput.style';

const flattenStyle = StyleSheet.flatten;

export default class AutoGrowTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0
    };
  }

  render() {
    const { minimumHeight, style, ...textInputProps } = this.props;

    return (
      <TextInput
        placeholder="Type here..."
        placeholderColor="rgb(102, 117, 130)"
        underlineColorAndroid="rgba(0,0,0,0)"
        {...textInputProps}
        multiline
        onContentSizeChange={(event) => {
          const currentHeight = event.nativeEvent.contentSize.height;
          const { maxHeight } = flattenStyle(style) || {};
          let resultantHeight = currentHeight;
          if (currentHeight > maxHeight) {
            resultantHeight = maxHeight;
          }
          this.setState({ height: resultantHeight });
        }}
        style={[styles.textInput, { height: Math.max(minimumHeight, this.state.height) }, style]}
      />
    );
  }
}

AutoGrowTextInput.propTypes = {
  ...TextInput.propTypes,
  minimumHeight: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

AutoGrowTextInput.defaultProps = {
  minimumHeight: 35
};
