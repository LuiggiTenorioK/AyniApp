import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import {ScrollView} from 'react-navigation';

class ProjHomepage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}></View>
                <Text style={styles.title}>{'Insertar eslogan'}</Text>
                <Text style={styles.text}>{'Descripción del proyecto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in finibus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam lacinia elit nec tortor vulputate, ac suscipit orci tincidunt. Integer vel sapien luctus, laoreet mauris quis, sagittis dolor. Integer dolor purus, posuere et libero sed, tincidunt ornare lacus. Nam nunc tortor, facilisis ut purus sed, luctus lacinia leo. Curabitur molestie eu leo a eleifend. Integer convallis, sem ut tristique posuere, nulla risus pretium urna, ut lacinia quam odio at diam. Curabitur vulputate erat a tortor egestas, sed dictum tortor dapibus. Maecenas elit velit, iaculis quis risus eget, cursus ullamcorper tortor. Integer commodo faucibus diam, vitae lacinia metus bibendum in.'}</Text>
                <Text style={styles.title}>{'Aportes'}</Text>
                <Text style={styles.text}>{'Objetivo: S/. 15 000'}</Text>
                <Text style={styles.text}>{'Objetivo: S/. 9 840'}</Text>
            </View>
        )
    }
};

export default ProjHomepage;

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        paddingHorizontal:15,
        alignItems: 'stretch',
    },
    image: {
        width: Dimensions.get('window').width-30,
        height: Dimensions.get('window').height*0.25,
        borderRadius: 20,
        backgroundColor:'#7cd7d7',
        marginVertical: 10,
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: '#555555',
        marginBottom: 10
    },
    text: {
        textAlign: 'justify',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#555555',
        marginBottom: 10
    }
});