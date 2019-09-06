import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ActivityCard extends Component {
    /**
     * input props: {title,description,organizer,id, active}
     */
    activeColor = this.props.passed ? '#555555' : '#00C87A';

    render() {
        return (
            <View style={{ ...styles.card, borderColor: this.activeColor }}>
                <View style={{ flex: 3, alignItems: 'stretch' }}>
                    <Text style={{...styles.titleText, color: this.activeColor }}>{this.props.title}</Text>
                    <Text style={styles.organizerText}>{'por @' + this.props.organizer}</Text>
                    <Text numberOfLines={8} style={styles.descriptionText}>{this.props.description}</Text>

                </View>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Ir a la actividad</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#00C87A',
        marginVertical: 5,
        flexDirection: 'row',
        padding: 15
    },
    titleText: {
        textAlign: 'justify',
        color: '#00C87A',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    organizerText: {
        textAlign: 'justify',
        color: '#aaaaaa',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginBottom: 5
    },
    descriptionText: {
        textAlign: 'justify',
        color: '#555555',
        fontSize: 14,
        fontFamily: 'Lato-Regular'
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#18C4B4',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
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