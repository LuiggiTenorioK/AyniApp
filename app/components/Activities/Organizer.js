import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Image,TouchableOpacity} from 'react-native';

export default class Organizer extends Component {
    renderConditionalText() {
        if (this.props.image == 'plus') {
            return <Image style={styles.imagePlus} source={require('../../assets/images/add.png')} ></Image>;
        } else {
            return <Image style={styles.image} source={require('../../assets/images/face.jpg')}></Image>;
        } 
    }
    
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.imageContainer}>
                {this.renderConditionalText()}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        borderColor: '#77D353',
        backgroundColor: '#77D353',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        borderRadius: Dimensions.get('window').height * 0.10,
        width: Dimensions.get('window').height * 0.10,
        height: Dimensions.get('window').height * 0.10,
        elevation: 5,
        margin:5
    },
    image: {
        borderRadius: Dimensions.get('window').height * 0.10,
        width: Dimensions.get('window').height * 0.10 - 10,
        height: Dimensions.get('window').height * 0.10 - 10,
    },
    imagePlus: {
        borderRadius: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').height * 0.06 - 10,
        height: Dimensions.get('window').height * 0.06 - 10,
    },
});