import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SocialMedia from '../../components/Activities/SocialMedia';
import Map from '../../components/Activities/Map';


export default class CreateActivityContinueView extends Component{
    state = {
      name :"",
      description:"",
    };
    sns=['facebook','instagram','twitter','add']
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container} >
          <Text style= {styles.text}>Contacto</Text>

          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Nombre de Contacto:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Número de Teléfono:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Correo Electrónico:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>Dirección:</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
          <Map></Map>
          <Text style= {styles.text}>Redes Sociales (Opcional)</Text>
          <View style= { styles.socialMediaContainer}> 
          {this.sns.map( x => (<SocialMedia name={x}/>))}
          </View>
          <View style= {{paddingBottom:30}}></View>

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
  contanctInfoContainer: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contanctInfoText: {
    textAlign: 'left',
    color: '#343F4B',
    marginTop: 6,
    marginBottom: 6,
    fontSize: 12,
    width:'40%',
    padding:10,
    fontFamily: 'Lato-Regular',
  },
  contanctInfoTextInput: {
    textAlign: 'left',
    color: '#343F4B',
    marginTop: 6,
    marginBottom: 6,
    fontSize: 12,
    width:'60%',
    height:40,
    padding:10,
    fontFamily: 'Lato-Regular',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
  },
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    
  },
  map:{
    width:200,
    height:200
  }

});