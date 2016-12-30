import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styles from './Icon.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconView = (props) => {
  const { name, size, color } = props;
    return (
      <Icon name={name} color={color} size={size} />
    );
};

IconView.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default IconView;
