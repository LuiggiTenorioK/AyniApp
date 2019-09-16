import React, {Component} from 'react';
import {StyleSheet, Text, View ,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SocialMedia from '../../components/Activities/SocialMedia';
import Map from '../../components/Activities/Map';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';
import ContactInfo from '../../components/Activities/ContactInfo';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class CreateActivityContactView extends Component{
    state = {
      name :"",
      description:"",
    };
  
    sns=[
      {id:1,name:'facebook'},
      {id:2,name:'instagram'},
      {id:3,name:'twitter'},
      {id:4,name:'add'},
    ]
    contactInfo=[
      {id:1,message:'Nombre de Contacto:'},
      {id:2,message:'Número de Teléfono:'},
      {id:3,message:'Correo Electrónico:'},
      {id:4,message:'Dirección:'},
    ]
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container} >
          
          <Text style= {styles.text}>Contacto</Text>
          {this.contactInfo.map( x => (<ContactInfo key ={x.id} message={x.message}/>))}
          <Map></Map>
          <Text style= {styles.text}>Redes Sociales (Opcional)</Text>
          <View style= { styles.socialMediaContainer}> 
            {this.sns.map( x => (<SocialMedia key ={x.id} name={x.name}/>))}
          </View>
          <View style= {{paddingBottom:25}}></View>
          <PurpleNavigationButton message ={'CREAR'} function = {() =>this.props.navigation.navigate('MyActivities')} />
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
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff', 
  },


});