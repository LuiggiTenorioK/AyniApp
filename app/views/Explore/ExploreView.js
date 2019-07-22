import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class MyActivitiesView extends Component{

    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <Text>You're in {routeName}</Text>
      )
    }
    
};