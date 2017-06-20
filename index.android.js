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
  View,
  Button
} from 'react-native';

class MyComponent extends Component {
  render() {
    return (
        <View>
          <Text> {this.props.test} </Text>
        </View>
    );
  };
}

export default class app_jokenpo_game extends Component {

  constructor(props) {
    super(props);
    this.state = { text : 'Texto Test 2' };
  }

  alterText(){
    this.setState({ text : 'Outra coisa' });
  }

  render() {
    return (
      <View>
        <MyComponent test={ this.state.text }></MyComponent>
        <Button
          title="Botão"
          onPress={() => {this.alterText()}}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent('app_jokenpo_game', () => app_jokenpo_game);
