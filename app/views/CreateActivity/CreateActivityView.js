
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View ,TextInput, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SocialMediaButton from '../../components/SocialMedia/SocialMediaButton';

export default class CreateActivityView extends Component{
    state = {
      name :"",
      description:"",
    };
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container}>
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
          <Text style= {styles.text}>Contacto</Text>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Número de Teléfono:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Correo Electrónico:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Nombre de Contacto:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Dirección:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <Text style= {styles.text}>Redes Sociales (Opcional)</Text>
          <View style= { styles.socialMediaContainer}>
            <SocialMediaButton></SocialMediaButton>
            <SocialMediaButton></SocialMediaButton>
            <SocialMediaButton></SocialMediaButton>
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
    fontWeight: "bold",
  },
  textInput: {
    textAlign: 'left',
    color: '#343F4B',
    marginBottom: 5,
    width:'100%',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    padding:10,
    marginBottom: 15
  },
  textArea: {
    textAlign: 'left',
    textAlignVertical: 'top',
    color: '#343F4B',
    marginBottom: 5,
    width:'100%',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    padding:10,
    height:100,
    marginBottom: 15
  },
  contanctInfoContainer: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contanctInfoText: {
    textAlign: 'left',
    color: '#343F4B',
    marginBottom: 5,
    fontSize: 12,
    width:'40%',
    padding:10,
  },
  contanctInfoTextInput: {
    textAlign: 'left',
    color: '#343F4B',
    marginBottom: 5,
    width:'60%',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    height:40,
    padding:10,
  },
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    
  },

});