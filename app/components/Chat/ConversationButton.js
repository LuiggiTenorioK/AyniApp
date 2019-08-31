import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class SquareActivityCard extends Component {
    /**
     * input props: {name,username,lastMessage,userSend,profileImage}
     */
    render() {
        return (
            <TouchableOpacity style={styles.box}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={styles.image}
                        source={{ uri: this.props.profileImage }}></Image>
                </View>
                
                <View style={{flex: 3, justifyContent:'space-around', alignItems: 'stretch',marginLeft:10}}>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Text numberOfLines={1} style={{flex:3,...styles.titleText}}>{this.props.name}</Text>
                        <Text numberOfLines={1}  style={{flex:2,...styles.usernameText}}>{'@'+this.props.username}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.subText}>{ (this.props.userSend?'Tú: ':'') + this.props.lastMessage}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    box: {
        height: 90,
        borderRadius: 10,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical:5,
        padding: 10
    },
    titleText: {
        textAlign: 'left',
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
    },
    usernameText: {
        textAlign: 'left',
        color: '#999999',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
    },
    subText: {
        textAlign: 'left',
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
});

export default withNavigation(SquareActivityCard);