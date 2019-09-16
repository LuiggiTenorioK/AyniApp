import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-navigation';

class DonationProgress extends Component {


    render() {
        return (
            <View style={{ ...styles.container }}>
                <Text style={styles.titleText} numberOfLines={1}>{this.props.name}</Text>
                <Text style={styles.usernameText} numberOfLines={1}>{'@' + this.props.username}</Text>

                <View style={{ ...styles.button }}>
                    <Text style={styles.buttonText} numberOfLines={2}>{'S/. '+this.props.amount.toString()}</Text>
                </View>
            </View>
        )
    }
};

export default DonationProgress;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        flexWrap: 'wrap',
        height: Dimensions.get('window').width * 0.25,
        width: Dimensions.get('window').width * 0.25,
        backgroundColor: '#eeeeee',
        elevation: 3,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleText: {
        textAlign: 'left',
        color: '#000000',
        fontSize: 12,
        fontFamily: 'Lato-Bold',
    },
    usernameText: {
        textAlign: 'left',
        color: '#999999',
        fontSize: 12,
        fontFamily: 'Lato-Bold',
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#77D353',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12,
        margin: 5,
        fontFamily: 'Lato-Bold'
    },
});