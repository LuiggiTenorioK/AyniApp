import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const img = require('../../assets/images/face.jpg');

export default class ProfileView extends Component{
    static navigationOptions = {
      title: '@moshe.exe',
    };

    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <View style= {styles.container}>
          <Image style= {styles.photoContainer} source={img}></Image>
          <Text style= {styles.text}>Moshe</Text>
          <Text style= {styles.text}>You'ree in {routeName}</Text>
          <Text style={styles.text} onPress={() =>this.props.navigation.navigate('Auth')}>Login</Text>
          <Text style={styles.text} onPress={() =>this.props.navigation.navigate('Explore')}>Explore</Text>
        </View>
      )
    }
    
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    photoContainer: {
      width: 100,
      height: 100,
      borderRadius: 100/2
    },
    text: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });