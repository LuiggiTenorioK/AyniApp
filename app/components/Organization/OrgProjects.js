import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity,  Dimensions} from 'react-native';
import {ScrollView} from 'react-navigation';
import ProjectCard from '../Project/ProjectCard';
import { withNavigation } from 'react-navigation';

class OrgActivities extends Component {
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
            description: "Ante la duda el que más ayuda, lallalalla asdfasdfasdfasdfasd asfsadfasdf",
            organizer: "moshe.exe"
        },
    ]; 

    render() {
        return (
            <View style={styles.container}>

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

export default withNavigation(OrgActivities);

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