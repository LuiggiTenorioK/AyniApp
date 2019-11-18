import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

class CarouselItem extends Component {
    render() {
        return (
            <View>
                <Image style={styles.image}
                    source={{ uri: this.props.previewImage }}></Image>
                <View style={styles.box}>
                    <View style={{ flex: 3, justifyContent: 'space-around', margin: 5 }}>
                        <Text numberOfLines={2} style={styles.titleText}>{this.props.title}</Text>
                        <Text numberOfLines={2} style={styles.descriptionText}>{this.props.description}</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <TouchableOpacity style={styles.moreButton} onPress={() =>this.props.navigation.navigate('Activity')} >
                            <Icon name="ios-arrow-forward" size={Dimensions.get('window').height / 16} color="#ffffff"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,
    },
    box: {
        width: Dimensions.get('window').width * 7 / 8,
        height: Dimensions.get('window').height / 8,
        borderRadius: 10,
        backgroundColor: '#18C4B4',
        alignSelf: 'center',
        marginTop: -1 * Dimensions.get('window').height / 16,
        flexDirection: 'row',
        elevation:5
    },
    moreButton: {
        borderRadius: 50,
        backgroundColor: '#77D353',
        width: Dimensions.get('window').height / 12,
        height: Dimensions.get('window').height / 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:3
    },
    titleText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginLeft: 10
    },
    descriptionText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginLeft: 10
    },
});

export default withNavigation(CarouselItem);