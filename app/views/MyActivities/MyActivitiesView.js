import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Button} from 'react-native';

export default class MyActivitiesView extends Component{

    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <View>
          <Text>You're in {routeName}</Text>
          <Button onPress={()=>this.props.navigation.navigate({routeName:'Organization',params: {id:2},key:'Org2'})} title={'Organization Preview'}></Button>
          <Button onPress={()=>this.props.navigation.navigate({routeName:'Project',params: {id:2},key:'Proj2'})} title={'Project Preview'}></Button>
        </View>
        
      )
    }
    
};