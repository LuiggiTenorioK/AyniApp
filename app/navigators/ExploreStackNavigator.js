import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from "react-navigation";
import ExploreView from "../views/Explore/ExploreView";
import SearchView from "../views/Explore/SearchView";
import ChatView from "../views/Chat/ChatView";

export default createStackNavigator({
    Explore: {
        screen: ExploreView,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Explorar',
            headerRight: (
                <Icon name="ios-chatboxes" size={30} color="#000000"
                    style={{ marginHorizontal: 15 }} onPress={() => navigation.navigate('Chat')} />
            )
        })
    },
    Search: {
        screen: SearchView,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Buscar'
        })
    },
    Chat: {
        screen: ChatView,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'Chats'
        })
    }
});