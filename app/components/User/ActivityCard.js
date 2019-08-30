import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class ActivityCard extends Component{
    /**
     * input props: {title,description,photoURL}
     */
    render(){
        return(
            <View style= {styles.card}>
                <View style={{flex:4, justifyContent:'space-around',margin:5}}>
                    <Text numberOfLines={2} style={styles.titleText}>{this.props.title}</Text>
                    <Text numberOfLines={3} style={styles.descriptionText}>{this.props.description}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style = {styles.buttonText}>Ver más</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:3, backgroundColor:'#cccccc',borderRadius:20, margin:10}}>
                    <Image style={styles.image} 
                        source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}></Image>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height:160,
        borderRadius:10,
        backgroundColor:'#00E1CC',
        marginVertical:5,
        flexDirection: 'row',
    },
    image:{
        width:100,
        height:100,
        borderRadius:15,
    },
    titleText:{
        textAlign: 'justify',
        color: '#ffffff',
        fontSize:18,
        fontFamily: 'Lato-Bold',
        marginLeft: 10
    },
    descriptionText:{
        textAlign: 'justify',
        color: '#ffffff',
        fontSize:14,
        fontFamily: 'Lato-Regular',
        marginLeft: 10
    },
    button: {
        borderRadius:20,
        backgroundColor:'#6C28E1',
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize:14,
        margin:5,
        fontFamily: 'Lato-Bold'
    },
});