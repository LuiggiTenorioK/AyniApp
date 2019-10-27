import React, {Component} from 'react';
import {StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native';
import { withNavigation } from 'react-navigation';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class PurpleNavigationButton extends Component{

    render(){
      return (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.props.function}>
                <Text style = {styles.buttonText}>{this.props.message}</Text>
            </TouchableOpacity>
          </View>

      )
    };
    
};
export default withNavigation(PurpleNavigationButton);

const styles = StyleSheet.create({
  
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginHorizontal:5,
    marginVertical: 10,
  },
  button: {
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#6C28E1',
    height: 60,
    width: "50%",
    padding:20,
    elevation:3,
  },
  buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Lato-Bold',
      fontSize: 15,
  },

});