import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class OrgHeader extends Component {

    state = {
        profileImgURL: 'https://cdn2.iconfinder.com/data/icons/love-nature/600/green-Leaves-nature-leaf-tree-garden-environnement-512.png',
        name: 'Prismatic',
        type: 'ONG'
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{marginVertical: Dimensions.get('window').height * 0.02,...styles.rowContainer}}>
                    <View style={{ flex: 1 ,...styles.rowContainer}}>
                        <Text>{this.state.type}</Text>
                        <Icon style={{marginHorizontal:5}} name={'ios-checkmark-circle'} size={20} color={'#00E1CC'}/>
                    </View>
                    <View style={{ flex: 1 ,...styles.rowContainer}}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: this.state.profileImgURL }}></Image>
                        </View>
                    </View>
                    <View style={{ flex: 1 ,...styles.rowContainer}}>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name={'md-send'} size={Dimensions.get('window').width * 0.1} color={'#555555'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text numberOfLines={1} style={styles.title}>{this.state.name}</Text>
            </View>
        )
    }
};

export default OrgHeader;

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width,
        zIndex: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: '#6C28E1',
        borderWidth: 3,
        overflow: 'hidden',
        elevation: 20,
    },
    image: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        borderRadius: 100,
        backgroundColor: '#ffffff'
    },
    title:{
        fontSize: 22,
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        color: '#000000',
        letterSpacing: 2
    },
    touch:{
        borderRadius:100,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});