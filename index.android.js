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
        result = 'Você ganhou';
      }

      if(choiceUser == 'Tesoura'){
        result = 'Você perdeu';
      }
    }

    if(choiceComputer == 'Papel'){
      if(choiceUser == 'Papel'){
        result = 'Empate';
      }

      if(choiceUser == 'Tesoura'){
        result = 'Você ganhou';
      }

      if(choiceUser == 'Pedra'){
        result = 'Você perdeu';
      }
    }

    if(choiceComputer == 'Tesoura'){
      if(choiceUser == 'Tesoura'){
        result = 'Empate';
      }

      if(choiceUser == 'Pedra'){
        result = 'Você ganhou';
      }

      if(choiceUser == 'Papel'){
        result = 'Você perdeu.';
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

        <View style={styles.stage}>
          <Text style={styles.txtResult}> { this.state.result} </Text>
          
          <MyIcon choice={this.state.choiceUser} player='Você'></MyIcon>
          <MyIcon choice={this.state.choiceComputer} player='Computador'></MyIcon>
        </View>
        
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

class MyIcon extends Component {
  render () {

    if( this.props.choice == 'Pedra' ){

      return (
        <View style={ styles.myIconStyle }>
          <Text>{this.props.player}</Text>
          <Image source={ require('./imgs/pedra.png') } />
        </View>
      );

    }else if( this.props.choice == 'Papel' ){

      return (
        <View style={ styles.myIconStyle }>
          <Text>{this.props.player}</Text>
          <Image source={ require('./imgs/papel.png') } />
        </View>
      );

    }else if( this.props.choice == 'Tesoura'){

      return (
        <View style={ styles.myIconStyle }>
          <Text>{this.props.player}</Text>
          <Image source={ require('./imgs/tesoura.png') } />
        </View>
      );

    }else{
      return false;
    }
  };
}

const styles = StyleSheet.create({
    btnChoice : {
      width : 90
    },
    painelActions : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      marginTop : 10
    },
    stage : {
      marginTop : 40,
      alignItems : 'center'
    },
    txtResult : {
      fontSize : 30,
      fontWeight : 'bold',
      color : 'red',
      height : 60
    },
    myIconStyle : {
      marginBottom : 10,
      alignItems : 'center'
    },
    txtPlayer : {
      fontSize : 18,
      fontWeight : 'bold'
    }
});
AppRegistry.registerComponent('app_jokenpo_game', () => app_jokenpo_game);
