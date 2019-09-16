import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const img = require('../../assets/images/face.jpg');

class NewsInfo extends Component {


    render() {
        return (
            <View style={{ ...styles.card }}>
                <View style={{ flex: 1.5,alignItems: 'center',justifyContent:'flex-start'}}>
                    <Image style= {styles.profilePhotoRound} source={img}></Image>
                </View>
                <View style={{ flex: 3.5, justifyContent:'center'}}>
                    <Text style={{...styles.title}}>{this.props.name}</Text>
                    <Text style={{...styles.role}}>{this.props.role}</Text>                   
                    <Text style={{...styles.subtitle}}>{this.props.username}</Text>
                    <Text style={{...styles.text}}>{'@'+this.props.description}</Text>
                    
                    <View style={{ ...styles.responseContainer }}>
                        <Icon name="md-chatbubbles" size={20} 
                        color="#343F4B"
                        style={{ marginRight: 5 }} />
                        <Text style={{...styles.textResponse}}>2</Text>
                        <Icon name="md-heart" size={20} 
                        color="#343F4B"
                        style={{ marginRight: 5 }} />
                        <Text style={{...styles.textResponse}}>1</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default withNavigation(NewsInfo);

const _size = (Dimensions.get('window').height);

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        marginVertical: 5,
        flexDirection: 'row',
        padding: 10,
        elevation:2,
        width:'90%',
    },
    title: {
        color: '#343F4B',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    role: {
        color: '#77D353',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    subtitle: {
        textAlign: 'justify',
        color: '#969FAA',
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        marginBottom: 5
    },
    text: {
        textAlign: 'justify',
        color: '#343F4B',
        fontSize: 10,
        fontFamily: 'Lato-Regular',
        marginBottom: 5
    },
    profilePhotoRound: {
        width: 60,
        height: 60,
        borderRadius: 50,
        margin:5
      },
    responseContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginHorizontal:5
    },
    textResponse: {
        textAlign: 'justify',
        color: '#969FAA',
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        marginRight: 15
    },
});