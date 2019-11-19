import React, {Component} from 'react';
import { StyleSheet,View,ActivityIndicator} from 'react-native';


export default class LoadingIndicator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#18C4B4" />
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#ffffff',
        padding: 15, 
    },
   
  });