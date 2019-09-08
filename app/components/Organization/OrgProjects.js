import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity,  Dimensions} from 'react-native';
import {ScrollView} from 'react-navigation';
import ActivityCard from '../Activities/ActivityCard';

class OrgActivities extends Component {
    data = 
    [
        {
            id:1,
            title: "Campaña para doggos",
            description: "Ante la duda el que más ayuda, lallalalla asdfasdfasdfasdfasd asfsadfasdf",
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
            organizer: "analiste"
        },
    ]; 

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>{'Actividades recientes'}</Text>
                {this.data.map( activity => (
                    <ActivityCard key={activity.id} id={activity.id} title={activity.title} 
                        description={activity.description} organizer={activity.organizer} passed={false}/>))}
                
                <Text style={styles.title}>{'Actividades pasadas'}</Text>
                {this.data.map( activity => (
                    <ActivityCard key={activity.id} id={activity.id} title={activity.title} 
                        description={activity.description} organizer={activity.organizer} passed={true}/>))}
                
            </View>
        )
    }
};

export default OrgActivities;

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