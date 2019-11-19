import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-navigation';

class OrgHomepage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...styles.image, marginVertical: 15 }}>
                    <Image style={styles.image} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTejBLKBcww2McB3ZwMFKgHydrhuHV1OTL2UO7_6CG56tULhW7Y' }}></Image>
                </View>
                <Text style={styles.title}>{'Plant the planet!'}</Text>
                <Text style={styles.text}>{'Creada en marzo 2011, Reforesta Squad es una asociación sin fin de lucro. Su objetivo es la preservación del bosque y de la biodiversidad, en países menos desarrollados y en Francia, con la población local, para favorecer iniciativas de preservación y ayudarlos a desarrollar nuevas alternativas económicas a la deforestación.'}</Text>
            </View>
        )
    }
};

export default OrgHomepage;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        alignItems: 'stretch',
    },
    image: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        color: '#555555',
        marginBottom: 15
    },
    text: {
        textAlign: 'justify',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#555555',
        marginBottom: 15
    },
});