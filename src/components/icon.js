import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const imageRock = require('../../imgs/pedra.png');
const imagePaper = require('../../imgs/papel.png');
const ImageScissors = require('../../imgs/tesoura.png');

class Icon extends Component {
  render() {
    if (this.props.choice === 'Pedra') {
      return (
        <View style={styles.myIconStyle}>
          <Text>{this.props.player}</Text>
          <Image source={imageRock} />
        </View>
      );
    } else if (this.props.choice === 'Papel') {
      return (
        <View style={styles.myIconStyle}>
          <Text>{this.props.player}</Text>
          <Image source={imagePaper} />
        </View>
      );
    } else if (this.props.choice === 'Tesoura') {
      return (
        <View style={styles.myIconStyle}>
          <Text>{this.props.player}</Text>
          <Image source={ImageScissors} />
        </View>
      );
    }
    return false;
  }
}

const styles = StyleSheet.create({
  myIconStyle: {
      marginBottom: 10,
      alignItems: 'center'
    },
    txtPlayer: {
      fontSize: 18,
      fontWeight: 'bold'
    }
});

export default Icon;
