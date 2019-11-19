import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const img = require('../../assets/images/face.jpg');

class VolunteerCard extends Component {


    render() {
        return (
            <TouchableOpacity style={{ ...styles.card }}>
                <View style={{ flex: 2,alignItems: 'center',justifyContent:'center'}}>
                    <Image style= {styles.profilePhotoRound} source={this.props.img?{uri: this.props.img}:img}></Image>
                </View>
                <View style={{ flex: 3, alignItems: 'stretch',justifyContent:'center'}}>
                    <Text style={{...styles.text}}>{this.props.name}</Text>
                    <Text style={{...styles.subtext}}>{'@'+this.props.username}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
export default withNavigation(VolunteerCard);

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        marginVertical: 5,
        flexDirection: 'row',
        padding: 5,
        elevation:2,
        width:'60%',
    },
    text: {
        textAlign: 'justify',
        color: '#343F4B',
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    subtext: {
        textAlign: 'justify',
        color: '#969FAA',
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        marginBottom: 5
    },
    profilePhotoRound: {
        width: 40,
        height: 40,
        borderRadius: 50,
        margin:5
      },
});