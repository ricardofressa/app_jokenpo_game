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

export default class app_jokenpo_game extends Component {

  constructor(props) {
    super(props);
    
    this.state = { choiceUser : '' }
  }

  jokenpo(choiceUser){
    this.setState=({ choiceUser : choiceUser  });
  }

  render() {
    return (
      <View>
        <Text> Escolha do usuário : { this.state.choiceUser } </Text>
        <Text> Escolha do computador </Text>
        <Text> Resultado </Text>
        <Button title="Pedra" onPress={ () => {this.jokenpo()} } />
        <Button title="Papel" onPress={ () => {this.jokenpo()} } />
        <Button title="Tesoura" onPress={ () => {this.jokenpo()} } />
      </View>
    );
  }
}
AppRegistry.registerComponent('app_jokenpo_game', () => app_jokenpo_game);
