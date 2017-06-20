/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
        <View>
          <Text> {this.props.property} </Text>
          <Text> {this.props.property2} </Text>
        </View>
    );
  };
}

export default class app_jokenpo_game extends Component {
  render() {
    return (
      <MyComponent property='Exemplo de Prop 01' property2='Exemplo de Prod 02'></MyComponent>
    );
  }
}
AppRegistry.registerComponent('app_jokenpo_game', () => app_jokenpo_game);
