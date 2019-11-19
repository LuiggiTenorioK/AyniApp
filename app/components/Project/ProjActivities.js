import React, { Component } from 'react';
import {  StyleSheet, Text, View, Dimensions} from 'react-native';
import ActivityCard from '../Activities/ActivityCard';
import { withNavigation } from 'react-navigation';

class ProjActivities extends Component {
    data = 
    [
        {
            id:1,
            title: "Monitoreo y Vigilancia de Árboles - Ucayali",
            description: "Apoya a los guarda bosque de una concesion de conservacion por la vigilencia y el monitoreo",
            organizer: "lbitGreen"
        },
        {
            id:2,
            title: "Tutores de vida",
            description: "Un programa de educación de Fundación Educa2",
            organizer: "alpiste"
        },
    ]; 

    data2 = 
    [
        {
            id:1,
            title: "Campaña para doggos",
            description: "Ante la duda el que más ayuda",
            organizer: "lbitGreen"
        },
        {
            id:2,
            title: "Campaña para doggos 2 - La revelación de los parques",
            description: "Ahora sin gatos",
            organizer: "lbitGreen"
        },
        {
            id:3,
            title: "Tutores de vida",
            description: "Un programa de educación de Fundación Educa2",
            organizer: "alpiste"
        },
    ]; 

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>{'Actividades recientes'}</Text>
                {this.data.map( activity => (
                    <ActivityCard key={activity.id} id={activity.id} title={activity.title} 
                        description={activity.description} organizer={activity.organizer} 
                       passed={false} /> ))}
                
                <Text style={styles.title}>{'Actividades pasadas'}</Text>
                {this.data2.map( activity => (
                    <ActivityCard key={activity.id} id={activity.id} title={activity.title} 
                        description={activity.description} organizer={activity.organizer} 
                        passed={true} />))}
                
            </View>
        )
    }
};

export default withNavigation(ProjActivities);

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
});