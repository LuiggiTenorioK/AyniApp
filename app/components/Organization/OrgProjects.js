import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-navigation';
import ProjectCard from '../Project/ProjectCard';

import axios from '../../store/axios';
import { connect } from 'react-redux';
import {Buffer} from 'buffer';

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

    constructor(props) {
        super(props)

        this.state = {
            organizaciones: [],
            proyectos: []
        }

        axios({
            url: 'api/organization/get_org_user',
            data: {
                "userId": this.props.idUser
            },
            headers: {
                'Authorization': 'Basic ' + Buffer.from(this.props.token + ":" + "unused").toString('base64')
            },
            method: 'POST'
        }).then((response) => {
            console.log("RESPONSE");
            console.log(response.status);
            console.log(response.data);
            if (response.status === 200) {
                this.setState({ organizaciones: response.data.listOfOrganizations },
                    () => {
                        this.state.organizaciones.map((org) => {
                            axios({
                                url: 'api/project/get_project_organization',
                                data: {
                                    "organizationId": org.id
                                },
                                headers: {
                                    'Authorization': 'Basic ' + Buffer.from(this.props.token + ":" + "unused").toString('base64')
                                },
                                method: 'POST'
                            }).then((response) => {
                                if (response.status === 200) {
                                    this.setState({
                                        proyectos:
                                            [...this.state.proyectos,
                                            response.data.listOfProjects]
                                    })
                                }
                            });
                        });
                    }
                );
            } else {
                alert("Error code ", response.status);
            }
        }).catch((error) => {
            console.log("ERROR");
            console.log(error.message);
        });
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>{'Proyectos recientes'}</Text>
                {this.state.proyectos.map(activity => (
                    <ProjectCard key={activity.id} id={activity.id} title={activity.name}
                        description={activity.name} organizer={activity.organization_id} passed={false} />))}

                <Text style={styles.title}>{'Proyectos pasados'}</Text>
                {this.data.map(activity => (
                    <ProjectCard key={activity.id} id={activity.id} title={activity.title}
                        description={activity.description} organizer={activity.organizer} passed={true} />))}

            </View>
        )
    }
};

const mapStateToProp = state => {
    return {
        token: state.auth.token,
        idUser: state.auth.idUser
    };
}
export default connect(mapStateToProp)(OrgActivities);

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 15,
        alignItems: 'stretch',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: '#555555',
        marginVertical: 10
    },
});