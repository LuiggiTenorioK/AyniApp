import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import {ScrollView} from 'react-navigation';

class DonationProgress extends Component {

    
    render() {
        return (
            <View style={{...styles.container, width: this.props.width}}>
                <View style={{...styles.fill, width: this.props.width*this.props.percent}}>
                    <Text style={styles.text}>{Math.round(this.props.percent*100).toString() + '%'}</Text>
                </View>
            </View>
        )
    }
};

export default DonationProgress;

const styles = StyleSheet.create({
    container:{
        borderRadius:30,
        height: 30,
        backgroundColor: '#cccccc'
    },
    fill:{
        borderRadius:30,
        height: 30,
        backgroundColor: '#6C28E1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#ffffff'
    }
});