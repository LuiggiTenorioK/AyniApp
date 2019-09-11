import React, {Component} from 'react';
import {Image, StyleSheet, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SocialMedia extends Component{
    renderConditionalText() {
        if (this.props.name == 'facebook') {
            return <Image style={styles.image} source={require('../../assets/images/facebook.png')}></Image>;
        } else if (this.props.name == 'instagram') {
            return <Image style={styles.image} source={require('../../assets/images/instagram.png')}></Image>;
        } else if (this.props.name == 'twitter'){
            return <Image style={styles.image} source={require('../../assets/images/twitter.png')}></Image>; 
        } else if (this.props.name == 'add'){
            return <Image style={styles.image} source={require('../../assets/images/add.png')}></Image>;
        }
    }
    render(){
        return(
            <TouchableOpacity style= {styles.card}>
            {this.renderConditionalText()}                 
            </TouchableOpacity>  
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height:60,
        width:60,
        borderRadius:10,
        backgroundColor:'#00E1CC',
        margin:5,
        alignItems:'center',
        justifyContent: 'center'
    },
    image:{
        width:40,
        height:40,
        borderRadius:3,
    },
});