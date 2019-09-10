import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class SocialMediaButton extends Component{

    render(){
        return(
            <View style= {styles.card}>
                <View style={{flex:3, backgroundColor:'#cccccc',borderRadius:20, margin:10}}>
                    <Image style={styles.image} 
                        source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}>
                    </Image>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height:60,
        width:60,
        borderRadius:10,
        backgroundColor:'#00E1CC',
        marginVertical:5,
        marginRight: 10,
    },
    image:{
        width:50,
        height:50,
        borderRadius:5,
    },
});