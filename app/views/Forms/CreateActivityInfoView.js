import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class CreateActivityInfoView extends Component{
    state = {
      name :"",
      description:"",
    };
    sns=['facebook','instagram','twitter','add']
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container} >
          <Text style= {styles.text}>¿Cómo inicio?</Text>
          <Text style= {styles.text}>¿Estás listo?</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('CreateActivityDescription')}>
                <Text style = {styles.buttonText}> Continuar</Text>
            </TouchableOpacity>
          </View>
      

        </ScrollView>
      )
    }
    
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    textAlign: 'left',
    color: '#343F4B',
    marginBottom: 5,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    margin:5
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
      fontSize: 18,
  },

});