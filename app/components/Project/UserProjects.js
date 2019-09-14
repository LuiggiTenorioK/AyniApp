import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity,  Dimensions} from 'react-native';
import {ScrollView} from 'react-navigation';
import ProjectCard from '../Project/ProjectCard';
import Icon from 'react-native-vector-icons/Ionicons';

class UserProjects extends Component {
    data = 
    [
        {
            id:1,
            title: "Lima Recicla: Primera Edición",
            description: "Un proyecto sin igual ",
            organizer: "lbitGreen"
        },
        {
            id:2,
            title: "Lima Unida",
            description: "Ante la duda el que más ayuda",
            organizer: "moshe.exe"
        },
    ]; 

    render() {
        return (
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('CreateActivity')}>
                      <Icon name="md-add-circle-outline" size={30} color="#ffffff"/>
                      <Text style = {styles.buttonText}> Crear Proyecto</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{'Proyectos recientes'}</Text>
                    {this.data.map( activity => (
                        <ProjectCard key={activity.id} id={activity.id} title={activity.title} 
                            description={activity.description} organizer={activity.organizer} passed={false}/>))}
                    
                    <Text style={styles.title}>{'Proyectos pasados'}</Text>
                    {this.data.map( activity => (
                        <ProjectCard key={activity.id} id={activity.id} title={activity.title} 
                            description={activity.description} organizer={activity.organizer} passed={true}/>))}
                    
                </View>
            
        )
    }
};

export default UserProjects;

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        paddingHorizontal:15,
        alignItems: 'stretch',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: '#555555',
        marginVertical: 10
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
});