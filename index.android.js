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
    
    this.state = { choiceUser : '', choiceComputer : '' };
  }

  jokenpo(choiceUser){

    //Generated random number
    var randomNumber = Math.floor(Math.random() * 3);

    var choiceComputer = '';

    switch(randomNumber){
      case 0 : choiceComputer = 'Pedra'; break;
      case 1 : choiceComputer = 'Papel'; break;
      case 2 : choiceComputer = 'Tesoura'; break;
    }

    this.setState({ choiceUser : choiceUser,
                    choiceComputer : choiceComputer
                  });
  }

  render() {
    return (
      <View>
        <Text> Escolha do usuário : { this.state.choiceUser } </Text>
        <Text> Escolha do computador : { this.state.choiceComputer } </Text>
        <Text> Resultado </Text>
        <Button title="Pedra" onPress={ () => {this.jokenpo('Pedra')} } />
        <Button title="Papel" onPress={ () => {this.jokenpo('Papel')} } />
        <Button title="Tesoura" onPress={ () => {this.jokenpo('Tesoura')} } />
      </View>
    );
  }
}
AppRegistry.registerComponent('app_jokenpo_game', () => app_jokenpo_game);
