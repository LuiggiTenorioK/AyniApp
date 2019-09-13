import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HelpInfo extends Component {

    render() {
        return (
            <TouchableOpacity style={{...styles.card, backgroundColor: this.props.color}}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        margin: 10,
        padding:5,
        elevation:5,
        width:'45%',
        height: 100,
    },
    text: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
});