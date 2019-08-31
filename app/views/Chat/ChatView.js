import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ConversationButton from '../../components/Chat/ConversationButton';

class ChatView extends Component {

    data = [
        {
            profileImage: 'https://scontent.flim9-1.fna.fbcdn.net/v/t1.0-9/60333966_3005076362843118_7309230646331703296_n.jpg?_nc_cat=103&_nc_oc=AQkR2A9ZMC9dRmJvDVIaez4Zw4UEioZg2UcufmTMt5SoObOf_4LH9RlBJap5ZXKaV2o&_nc_ht=scontent.flim9-1.fna&oh=b10d7290520c3ec330861c8b4dfee020&oe=5DD31050',
            name: 'Moshe Ojeda',
            username: 'moshe.exe',
            userSend: true,
            lastMessage: 'Destruí tu casita de Minecraft :c'
        },
        {
            profileImage: 'https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/03/red-nose-pitbull-1-e1520600821708.jpg?quality=90&strip=all&zoom=1&resize=644%2C548&ssl=1',
            name: 'Daniel Alpiste',
            username: 'analiste',
            userSend: false,
            lastMessage: 'No creo que nadie más lo sea'
        },
        {
            profileImage: 'https://i1.rgstatic.net/ii/profile.image/288923902332930-1445896234300_Q512/Miguel_Guanira.jpg',
            name: 'Miguel Guanira',
            username: 'waniwani',
            userSend: false,
            lastMessage: '¿Me tabulas?'
        }
    ]

    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={{ ...styles.greyContainer, margin: 20 }}>
                    <Icon name="md-search" size={20} color="#000000" style={{ flex: 1, marginLeft: 10 }} />
                    <TextInput style={{ flex: 10, ...styles.searchInput }}></TextInput>
                </TouchableOpacity>
                <View style={{ marginHorizontal: 20, alignItems: 'stretch', justifyContent: 'center' }}>
                    {this.data.map(user => (
                        <ConversationButton key={user.username} profileImage={user.profileImage} name={user.name}
                            username={user.username} userSend={user.userSend} lastMessage={user.lastMessage} />))
                    }
                </View>
            </ScrollView>
        )
    }
};

export default ChatView;

const styles = StyleSheet.create({
    greyContainer: {
        borderRadius: 10,
        height: 35,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
    },
    searchInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        paddingVertical: 0,
        marginHorizontal: 5,
        fontSize: 14
    }
});