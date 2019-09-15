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
                <Text style={styles.title}>{'Insertar eslogan'}</Text>
                <Text style={styles.text}>{'Descripción del proyecto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in finibus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam lacinia elit nec tortor vulputate, ac suscipit orci tincidunt. Integer vel sapien luctus, laoreet mauris quis, sagittis dolor. Integer dolor purus, posuere et libero sed, tincidunt ornare lacus. Nam nunc tortor, facilisis ut purus sed, luctus lacinia leo. Curabitur molestie eu leo a eleifend. Integer convallis, sem ut tristique posuere, nulla risus pretium urna, ut lacinia quam odio at diam.'}</Text>
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