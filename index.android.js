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
  Button,
  Image
} from 'react-native';

export default class app_jokenpo_game extends Component {

  constructor(props) {
    super(props);
    
    this.state = {  choiceUser : '', 
                    choiceComputer : '',
                    result : '' };
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

    var result = ''

    if(choiceComputer == 'Pedra'){
      if(choiceUser == 'Pedra'){
        result = 'Empate';
      }

      if(choiceUser == 'Papel'){
        result = 'Usuário ganhou';
      }

      if(choiceUser == 'Tesoura'){
        result = 'Computador ganhou';
      }
    }

    if(choiceComputer == 'Papel'){
      if(choiceUser == 'Papel'){
        result = 'Empate';
      }

      if(choiceUser == 'Tesoura'){
        result = 'Usuário ganhou';
      }

      if(choiceUser == 'Pedra'){
        result = 'Computador ganhou';
      }
    }

    if(choiceComputer == 'Tesoura'){
      if(choiceUser == 'Tesoura'){
        result = 'Empate';
      }

      if(choiceUser == 'Pedra'){
        result = 'Usuário ganhou';
      }

      if(choiceUser == 'Papel'){
        result = 'Computador ganhou';
      }
    }

    this.setState({ choiceUser : choiceUser,
                    choiceComputer : choiceComputer,
                    result : result
                  });
  }


  render() {
    return (
      <View>
        <View>
          <Top />
        </View>

        <View style={ styles.painelActions }>
          
          <View style= { styles.btnChoice } >
            <Button title="Pedra" onPress={ () => {this.jokenpo('Pedra')} } />
          </View>

          <View style= { styles.btnChoice }>
            <Button title="Papel" onPress={ () => {this.jokenpo('Papel')} } />
          </View>

          <View style= { styles.btnChoice }>
            <Button title="Tesoura" onPress={ () => {this.jokenpo('Tesoura')} } />
          </View>

        </View>

        <Text> Escolha do usuário : { this.state.choiceUser } </Text>
        <Text> Escolha do computador : { this.state.choiceComputer } </Text>
        <Text> Resultado : { this.state.result} </Text>

      </View>
    );
  }
}

class Top extends Component {
  render() {
    return (
        <View>
          <Image source={ require('./imgs/jokenpo.png') } />
        </View>
      );
  }
}

const styles = StyleSheet.create({
    btnChoice : {
      width : 90
    },
    painelActions : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      marginTop : 10
    }
});
AppRegistry.registerComponent('app_jokenpo_game', () => app_jokenpo_game);
