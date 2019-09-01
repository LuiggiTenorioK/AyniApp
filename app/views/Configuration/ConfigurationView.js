import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';


class ConfigurationView extends Component{
    render(){
        return (
            <View style={{alignItems:'stretch'}}>
                <Text style={styles.text} onPress={() =>this.props.navigation.navigate('Auth')}>Login</Text>
                <View style={{backgroundColor:'#cccccc', height:2}}></View>
                <Text style={styles.text} onPress={() =>this.props.navigation.navigate('Explore')}>Explore</Text>
                <Image
                    style={{width: 50, height: 50,backgroundColor:'#cccccc'}}
                    source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      textAlign: 'left',
      color: '#444444',
      fontSize:18,
      fontWeight: 'bold',
      margin:15
    },

});

export default (ConfigurationView);