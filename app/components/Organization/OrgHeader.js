import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

class OrgHeader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.type}</Text>
                <Image style={styles.image} source={{uri: this.props.profileImgURL}}></Image>
                <TouchableOpacity style={styles.image}></TouchableOpacity>
            </View>
        )
    }
};

export default OrgHeader;

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