import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserBox from './UserBox';
import Icon from 'react-native-vector-icons/Ionicons';

export default class UserHeader extends Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.title} >{this.props.selectedUser ? this.props.selectedUser.name : 'Luiggi Tenorio'}</Text>
                    <Icon style={{ marginHorizontal: 5 }} name={'ios-checkmark-circle'} size={20} color={'#77D353'} />
                </View>
                <Text style={styles.text} >{this.props.selectedUser ? '@' + this.props.selectedUser.username : '@lbitGreen'}</Text>

                <UserBox></UserBox>

                <Text style={styles.text}>{this.props.selectedUser ? this.props.selectedUser.description : 'Heal the world!'}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    text: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        marginVertical: 10,
        letterSpacing: 1
    }
});