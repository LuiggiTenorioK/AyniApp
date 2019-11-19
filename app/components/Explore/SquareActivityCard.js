import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions ,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class SquareActivityCard extends Component {
    /**
     * input props: {title,photoURL}
     */
    render() {
        return (
            <TouchableOpacity style={{margin:5}}>
                <Image style={styles.image}
                    source={{ uri: this.props.previewImage }}></Image>
                <View style={styles.box}>
                    <Text numberOfLines={3} style={styles.titleText}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const _size = (Dimensions.get('window').width-40)/2;

const styles = StyleSheet.create({
    image: {
        width: _size,
        height: _size,
        borderRadius: 10,
    },
    box: {
        width: _size,
        height: _size/2,
        borderRadius: 10,
        backgroundColor: '#18C4B4',
        marginTop: -1 * _size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    titleText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        margin: 10
    },
});

export default withNavigation(SquareActivityCard);