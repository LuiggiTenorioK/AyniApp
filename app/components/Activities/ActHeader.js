import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import InscriptionButton from '../../components/Activities/InscriptionButton';
import Hashtag from '../../components/Activities/Hashtag';

import { Header } from 'react-navigation';


class ActHeader extends Component {

    state = {
        name: 'Campaña de Reciclaje',
        organizer: 'Prismatic'
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{height:Header.HEIGHT}}></View>
                <View style={{margin: Dimensions.get('window').height * 0.02,...styles.rowContainer}}>
                    <View style={{ flex: 3 ,...styles.rowContainer}}>
                        <Text numberOfLines={2} style={styles.title}>{this.state.name}</Text>
                    </View>                       
                    <View style={{ flex: 2, flexDirection:'column-reverse'}}>
                        <Text style={styles.text}>{'Por @'+this.state.organizer}</Text>
                        <Text style={styles.text}>Actividad promovida por</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row-reverse', justifyContent:'flex-start',alignItems:'center', margin:10}}>
                    <InscriptionButton message ={'Postular'} />
                    <Hashtag message ={'medioambiente'} /> 
                    <Hashtag message ={'reciclaje'} />          
                </View>
            </View>
        )
    }
};

export default ActHeader;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.30,
        width: Dimensions.get('window').width,
        backgroundColor: '#18C4B4',
        marginBottom:-20
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        textAlign: 'left',
        color: '#ffffff',
        letterSpacing: 1
    },
    text:{
        fontSize: 10,
        fontFamily: 'Lato-Regular',
        textAlign: 'right',
        color: '#ffffff'
    }
});