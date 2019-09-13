import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SocialMedia from '../../components/Activities/SocialMedia';
import Map from '../../components/Activities/Map';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';
import ContactInfo from '../../components/Activities/ContactInfo';



export default class CreateActivityContactView extends Component{
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
          <ContactInfo message= {'Nombre de Contacto:'}/>
          <ContactInfo message= {'Número de Teléfono:'}/>
          <ContactInfo message= {'Correo Electrónico:'}/>
          <ContactInfo message= {'Dirección:'}/>
          <Map></Map>
          <Text style= {styles.text}>Redes Sociales (Opcional)</Text>
          <View style= { styles.socialMediaContainer}> 
          {this.sns.map( x => (<SocialMedia name={x}/>))}
          </View>
          <PurpleNavigationButton message ={'CREAR'} function = {() =>this.props.navigation.navigate('MyActivities')} />
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
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    
  },


});