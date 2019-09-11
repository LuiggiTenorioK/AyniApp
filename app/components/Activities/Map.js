import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component{

    render(){
        return (
            <View style={styles.mapcontainer}>
                <MapView style={styles.map} />
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    mapcontainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:200,
        margin:10
    },
    map:{
        width:'100%',
        height:'100%',
    }
  
  });