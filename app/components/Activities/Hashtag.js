import React, {Component} from 'react';
import {StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class Hashtag extends Component{
    
    render(){
      return (
            <TouchableOpacity style={styles.button} >
                <Text style = {styles.buttonText}>{'#'}{this.props.message}</Text>
            </TouchableOpacity>
      )
    };
    
};
export default withNavigation(Hashtag);

const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    backgroundColor:'#F7F7F7',
    height: Dimensions.get('window').height * 0.03,
    width: 120,
    padding:10,
    elevation:3,
    margin:5
  },
  buttonText: {
      textAlign: 'center',
      color: '#343F4B',
      fontFamily: 'Lato-Bold',
      fontSize: 10,
  },

});