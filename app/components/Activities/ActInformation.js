
import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SocialMedia from '../../components/Activities/SocialMedia';


const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ActInformation extends Component{

  sns=[
    {id:1,name:'facebook'},
    {id:2,name:'instagram'},
    {id:3,name:'twitter'},
    {id:4,name:'add'},
  ]
    render(){
      return (
        <View style={styles.container} >
          <Text style= {styles.text}>Descripción</Text>
          <Text style= {styles.subtext}>{this.props.activity.description}</Text>


          <Text style= {styles.text}>Contacto</Text>
          <Text style= {styles.subtext}>{'Nombre de Contacto: '}{this.props.activity.contactName}</Text>
          <Text style= {styles.subtext}>{'Número de Teléfono: '}{this.props.activity.contactNumber}</Text>
          <Text style= {styles.subtext}>{'Correo Electrónico: '}{this.props.activity.contactEmail}</Text>
          <Text style= {styles.subtext}>{'Dirección: '}{this.props.activity.contactAddress}</Text>

          <Text style= {styles.text}>Redes Sociales</Text>
          <View style= { styles.socialMediaContainer}> 
          {this.sns.map( x => (<SocialMedia key ={x.id} name={x.name}/>))}
          </View>
        </View>
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
    margin: 10,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  subtext: {
    color: '#000000',
    margin: 10,
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    textAlign: 'justify',
  },
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff', 
  },
});