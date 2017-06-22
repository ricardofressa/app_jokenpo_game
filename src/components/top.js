import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imageLogo = require('../../imgs/jokenpo.png');

class Top extends Component {
  render() {
    return (
        <View>
          <Image source={imageLogo} />
        </View>
      );
  }
}

export default Top;
