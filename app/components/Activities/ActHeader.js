import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import InscriptionButton from '../../components/Activities/InscriptionButton';
import Hashtag from '../../components/Activities/Hashtag';
import LinearGradient from 'react-native-linear-gradient';

import { Header } from 'react-navigation';


class ActHeader extends Component {

    state = {
        name: 'Monitoreo y Vigilancia de Árboles - Ucayali',
        organizer: 'Envol Vert'
    }


    render() {
        return (
            <LinearGradient colors={['#18C4B4', '#7fd8fa']} style={styles.container}>
                <View style={{height:Header.HEIGHT/2}}></View>
                <View style={{margin: Dimensions.get('window').height * 0.02,...styles.rowContainer}}>
                    <View style={{ flex: 4 ,...styles.rowContainer}}>
                        <Text numberOfLines={2} style={styles.title}>{this.state.name}</Text>
                    </View>                       
                    <View style={{ flex: 1, flexDirection:'column-reverse',marginVertical:5}}>
                        <Text style={styles.text}>{'Por @'+this.state.organizer}</Text>
                        <Text style={styles.text}>Actividad promovida</Text>
                    
                    </View>
                </View>
                <View style={{flexDirection: 'row-reverse', justifyContent:'flex-start',alignItems:'center', marginHorizontal:10, marginBottom:40}}>
                    <InscriptionButton message ={'Postular'} />
                    <Hashtag message ={'medioambiente'} /> 
                    <Hashtag message ={'amazonia'} />          
                </View>
            </LinearGradient>
        )
    }
};

export default ActHeader;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width,
        backgroundColor: '#18C4B4',
        marginBottom:-20,
        justifyContent: 'space-around',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontSize: 20,
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