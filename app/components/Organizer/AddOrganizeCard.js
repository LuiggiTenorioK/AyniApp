import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


const img = require('../../assets/images/face.jpg');

class AddOrganizeCard extends Component {


    render() {
        return (
            <TouchableOpacity style={{ ...styles.card }}>
                <Icon name="md-add" size={60} color="#343F4B" 
                style={{ flex: 1 ,padding:10, }} />
            </TouchableOpacity>
        )
    }
}
export default withNavigation(AddOrganizeCard);

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        marginVertical: 5,
        padding: 5,
        elevation:2,
        width:'90%',
        alignItems:'center'
    },
    profilePhotoRound: {
        width: 60,
        height: 60,
        borderRadius: 50,
        margin:5
      },
});