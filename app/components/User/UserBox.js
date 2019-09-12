import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

export default class UserHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/face.jpg')}></Image>
                </View>
                <View style={styles.box}>
                    <View style={styles.item}>
                        <Text style={styles.numberText}>1060</Text>
                        <Text style={styles.text}>puntos de acción de Ayni</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.numberText}>2</Text>
                        <Text style={styles.text}>actividades como organizador</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.numberText}>5</Text>
                        <Text style={styles.text}>actividades como voluntario</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom:15
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.15,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#77D353',
        zIndex: 1,
        paddingHorizontal: 10,
        paddingTop: Dimensions.get('window').height * 0.03 ,
        paddingBottom: 10,
        elevation: 5
    },
    imageContainer: {
        borderColor: '#77D353',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        borderRadius: Dimensions.get('window').height * 0.15,
        width: Dimensions.get('window').height * 0.15,
        height: Dimensions.get('window').height * 0.15,
        elevation: 10,
        marginBottom: -1 * Dimensions.get('window').height * 0.03,
    },
    image: {
        borderRadius: Dimensions.get('window').height * 0.15,
        width: Dimensions.get('window').height * 0.15 - 10,
        height: Dimensions.get('window').height * 0.15 - 10,
    },
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 10,
        textAlign: 'center',
        color: '#ffffff',
        margin:5
    },
    numberText: {
        fontFamily: 'Lato-Black',
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff'
    }
});