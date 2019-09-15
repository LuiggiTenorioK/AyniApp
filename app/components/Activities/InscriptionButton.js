import React, {Component} from 'react';
import {StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class InscriptionButton extends Component{

    render(){
      return (
            <TouchableOpacity style={styles.button} >
                <Text style = {styles.buttonText}>{this.props.message}</Text>
            </TouchableOpacity>
      )
    };
    
};
export default withNavigation(InscriptionButton);

const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    backgroundColor:'#735CD1',
    height: Dimensions.get('window').height * 0.05,
    width: "25%",
    padding:10,
    elevation:3,
    margin:10
  },
  buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Lato-Bold',
      fontSize: 15,
  },

});