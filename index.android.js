/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

import Top from './src/components/top.js';
import Icon from './src/components/icon.js';

export default class appJokenpoGame extends Component {

  constructor(props) {
    super(props);
    
    this.state = { choiceUser: '', choiceComputer: '', result: '' };
  }

  jokenpo(choiceUser) {
    //Generated random number
    const randomNumber = Math.floor(Math.random() * 3);

    let choiceComputer = '';

    switch (randomNumber) {
      case 0 : choiceComputer = 'Pedra'; break;
      case 1 : choiceComputer = 'Papel'; break;
      case 2 : choiceComputer = 'Tesoura'; break;
      default : choiceComputer = '';
    }

    let result = '';

    if (choiceComputer === 'Pedra') {
      if (choiceUser === 'Pedra') {
        result = 'Empate';
      }

      if (choiceUser === 'Papel') { 
        result = 'Você ganhou';
      }

      if (choiceUser === 'Tesoura') {
        result = 'Você perdeu';
      }
    }

    if (choiceComputer === 'Papel') {
      if (choiceUser === 'Papel') {
        result = 'Empate';
      }

      if (choiceUser === 'Tesoura') {
        result = 'Você ganhou';
      }

      if (choiceUser === 'Pedra') {
        result = 'Você perdeu';
      }
    }

    if (choiceComputer === 'Tesoura') {
      if (choiceUser === 'Tesoura') {
        result = 'Empate';
      }

      if (choiceUser === 'Pedra') {
        result = 'Você ganhou';
      }

      if (choiceUser === 'Papel') {
        result = 'Você perdeu.';
      }
    }

    this.setState({ choiceUser, choiceComputer, result });
  }

  render() {
    return (
      <View>
        <View>
          <Top />
        </View>

        <View style={styles.painelActions}>    
          <View style={styles.btnChoice}>
            <Button title="Pedra" onPress={() => { this.jokenpo('Pedra'); }} />
          </View>

          <View style={styles.btnChoice}>
            <Button title="Papel" onPress={() => { this.jokenpo('Papel'); }} />
          </View>

          <View style={styles.btnChoice}>
            <Button title="Tesoura" onPress={() => { this.jokenpo('Tesoura'); }} />
          </View>
        </View>

        <View style={styles.stage}>
          <Text style={styles.txtResult}> { this.state.result} </Text>
          <Icon choice={this.state.choiceUser} player='Você' />
          <Icon choice={this.state.choiceComputer} player='Computador' />
        </View>

      </View>
    );
  }
} 

const styles = StyleSheet.create({
    btnChoice: {
      width: 90
    },
    painelActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10
    },
    stage: {
      marginTop: 40,
      alignItems: 'center'
    },
    txtResult: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red',
      height: 60
    }
});

AppRegistry.registerComponent('app_jokenpo_game', () => appJokenpoGame);
