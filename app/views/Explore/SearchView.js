import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchView extends Component{

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row', margin:10}}>
                    <TouchableOpacity style={{flex:3,...styles.greyContainer}}>
                        <Icon name="md-search" size={20} color="#000000" style={{flex:1, marginLeft: 10 }} />
                        <TextInput autoFocus style={{flex:10,...styles.searchInput}}></TextInput>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1,...styles.greyContainer,marginLeft:10}}>
                        <Text style={styles.nearText}>Cerca de mí</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
};

const styles = StyleSheet.create({
    greyContainer: {
        borderRadius: 10,
        height: 35,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent:'center',
        padding:5,
        flexDirection: 'row',
    },
    searchInput:{
        borderBottomWidth:1,
        borderBottomColor:'#dddddd',
        paddingVertical: 0,
        marginHorizontal:5,
        fontSize:14
    },
    nearText:{
        fontSize:12,
        color: '#18C4B4'
    }
});