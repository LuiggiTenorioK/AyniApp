import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';


export default class CreateActivityDescriptionView extends Component{
    state = {
      name :"",
      description:"",
    };
    sns=['facebook','instagram','twitter','add']
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container} >
          <Text style= {styles.text}>Nombre de la actividad</Text>
          <TextInput 
            style= {styles.textInput}
            onChangeText={(text) => this.setState({name: text})}
            placeholder="Define el nombre de tu actividad"
          />
          <Text style= {styles.text}>Descripción</Text>
          <TextInput 
              style= {styles.textArea}
              multiline={true}
              onChangeText={(text) => this.setState({description: text})}
              placeholder="Empieza con una frase inspiradora, define cual es el alcance y objetivo de tu actividad."
          />
          <Text style= {styles.text}>Organizadores</Text>
          <PurpleNavigationButton message ={'CONTINUAR'} function = {() =>this.props.navigation.navigate('CreateActivityContact')} />


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
  textInput: {
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 15,
    color: '#343F4B',
    width:'100%',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    padding:10,
    fontFamily: 'Lato-Regular',
  },
  textArea: {
    textAlign: 'left',
    textAlignVertical: 'top',
    marginTop: 10,
    marginBottom: 15,
    color: '#343F4B',
    width:'100%',
    height:100,
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    padding:10,
    fontFamily: 'Lato-Regular',
  },
});