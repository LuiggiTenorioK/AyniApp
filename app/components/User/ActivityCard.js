import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class ActivityCard extends Component{
    /**
     * input props: {title,description,photoURL}
     */
    render(){
        return(
            <View style= {styles.card}>
                <View style={{flex:5, justifyContent:'space-around',margin:5}}>
                    <Text numberOfLines={2} style={styles.titleText}>{this.props.title}</Text>
                    <Text numberOfLines={3} style={styles.descriptionText}>{this.props.description}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style = {styles.buttonText}>Ver más</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:4, backgroundColor:'#cccccc',borderRadius:20, margin:10}}>
                    <Image style={styles.image} 
                        source={{uri: this.props.previewImage}}></Image>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height:160,
        borderRadius:20,
        backgroundColor:'#18C4B4',
        marginVertical:5,
        flexDirection: 'row',
        elevation: 5
    },
    image:{
        flex:1,
        width:null,
        height:null,
        borderRadius:15,
    },
    titleText:{
        textAlign: 'left',
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