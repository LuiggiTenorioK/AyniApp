import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

class OrgContactView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{'Contacto'}</Text>
            </View>
        )
    }
};

export default OrgContactView;

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height*0.4,
        width: Dimensions.get('window').width,
    },
    image: {
        width: Dimensions.get('window').height*0.2,
        height: Dimensions.get('window').height*0.2,
        borderRadius: 50
    }
});