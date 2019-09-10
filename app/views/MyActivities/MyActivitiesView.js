import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ActivityCard from '../../components/User/ActivityCard';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyActivitiesView extends Component{

    render(){
        return(
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('CreateActivity')}>
                      <Icon name="md-add-circle-outline" size={30} color="#ffffff"/>
                      <Text style = {styles.buttonText}> Crear Actividad</Text>
                </TouchableOpacity>

              
              <Text style= {styles.text}>En curso</Text>
              <View style = { {alignItems:'stretch'}}>
                <ActivityCard title="EcoTrash" description = "Ayuda a mujeres recicladoras"></ActivityCard>
              </View>
              <Text style= {styles.text}>Finalizadas</Text>
              <View style = { {alignItems:'stretch'}}>
                <ActivityCard title="Campaña para doggos" description = "Ante la duda el que más ayuda"></ActivityCard>
                <ActivityCard title="Construcción de Viviendas" description = "Ante la duda el que más ayuda"></ActivityCard>
                <ActivityCard title="Chocolatada" description = "Ante la duda el que más ayuda"></ActivityCard>
              </View>        
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:'#00E1CC',
    height: 60,
    width: "100%",
    padding:20,
  },
  buttonText: {
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Lato-Bold',
      fontSize: 18,
  },
  text: {
    textAlign: 'left',
    color: '#343F4B',
    marginVertical:5,
    fontSize: 18,
    fontWeight: "bold",
  }
});