import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

class ProjectCard extends Component {
    /**
     * input props: {title,description,organizer,id, active}
     */
    activeColor = this.props.passed ? ['#777777', '#444444'] : ['#00e1cc', 'dodgerblue'];

    render() {
        return (
            <LinearGradient colors={this.activeColor} style={{ ...styles.card }}>
                <View style={{ flex: 3, alignItems: 'stretch' }}>
                    <Text style={{...styles.titleText}}>{this.props.title}</Text>
                    <Text style={styles.organizerText}>{'por @' + this.props.organizer}</Text>
                    <Text numberOfLines={8} style={styles.descriptionText}>{this.props.description}</Text>

                </View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate({routeName:'Project',params: {id:2},key:'Proj2'})} title={'Project Preview'}>
                        <Text style={styles.buttonText}>Ir al proyecto</Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>
        )
    }
}

export default withNavigation(ProjectCard);

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        marginVertical: 5,
        flexDirection: 'row',
        padding: 15
    },
    titleText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    organizerText: {
        textAlign: 'justify',
        color: '#eeeeee',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginBottom: 5
    },
    descriptionText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'Lato-Regular'
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#6C28E1',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        elevation:3
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 14,
        margin: 5,
        fontFamily: 'Lato-Bold',
        letterSpacing: 1
    },
});