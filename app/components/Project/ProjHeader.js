import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'react-navigation';


class ProjHeader extends Component {

    state = {
        name: 'Lima Recicla: Primera Edición',
        organizer: 'Prismatic'
    }


    render() {
        return (
            <LinearGradient colors={['#00e1cc', 'dodgerblue']} style={styles.container}>
                <View style={{height:Header.HEIGHT}}></View>
                <View style={{margin: Dimensions.get('window').height * 0.02,...styles.rowContainer}}>
                    <View style={{ flex: 3 ,...styles.rowContainer}}>
                        <Text numberOfLines={2} style={styles.title}>{this.state.name}</Text>
                    </View>
                    <View style={{ flex: 2, flexDirection:'column-reverse'}}>
                        <Text style={styles.text}>{'Por @'+this.state.organizer}</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
};

export default ProjHeader;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.25,
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