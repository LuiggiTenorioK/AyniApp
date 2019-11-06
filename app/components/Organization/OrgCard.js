import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class ActivityCard extends Component {
    /**
     * input props: {name,username,profileImgURL,id}
     */


    render() {
        return (
            <TouchableOpacity style={{ ...styles.card }} onPress={() => this.props.navigation.navigate('Organization')}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: this.props.profileImgURL }}></Image>
                    </View>
                </View>

                <View style={{ flex: 3, alignItems: 'stretch', justifyContent: 'center' }}>
                    <Text style={{ ...styles.text }}>{this.props.name}</Text>
                    <Text style={{ ...styles.subtext }}>{'@' + this.props.username}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Icon name="ios-arrow-forward" size={Dimensions.get('window').height / 20} color="#000" />
                </View>
            </TouchableOpacity>
        )
    }
}
export default withNavigation(ActivityCard);

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: '#F7F7F7',
        marginVertical: 5,
        flexDirection: 'row',
        padding: 5,
        elevation: 2,
    },
    text: {
        textAlign: 'justify',
        color: '#343F4B',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    subtext: {
        textAlign: 'justify',
        color: '#969FAA',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginBottom: 5
    },
    profilePhotoRound: {
        width: 40,
        height: 40,
        borderRadius: 50,
        margin: 5
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: '#6C28E1',
        borderWidth: 3,
        overflow: 'hidden',
        elevation: 20,
    },
    image: {
        width: Dimensions.get('window').width * 0.25 - 6,
        height: Dimensions.get('window').width * 0.25 - 6,
        borderRadius: 100,
        backgroundColor: '#ffffff'
    },
});