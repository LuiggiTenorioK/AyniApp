import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class MyActivitiesView extends Component{

    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <View>
          <Text>You're in {routeName}</Text>
          <Text onPress={()=>this.props.navigation.navigate({routeName:'Organization',params: {id:2},key:'Org2'})}> a</Text>
        </View>
        
      )
    }
    
};