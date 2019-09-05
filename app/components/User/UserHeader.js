import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class UserHeader extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title} >{this.props.selectedUser ? this.props.selectedUser.name : 'No Name'}</Text>
                <Text style={styles.text} >{this.props.selectedUser ? '@' + this.props.selectedUser.username : 'No Username'}</Text>
                
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, ...styles.center }}>
                    <View style={{ flex: 1, height: 90, width: 90, flexWrap: 'wrap', padding: 5, ...styles.center }}>
                        <View style={{ borderRadius: 50, backgroundColor: 'red', width: 25, height: 25, margin: 5 }}></View>
                        <View style={{ borderRadius: 50, backgroundColor: 'blue', width: 25, height: 25, margin: 5 }}></View>
                        <View style={{ borderRadius: 50, backgroundColor: 'green', width: 25, height: 25, margin: 5 }}></View>
                    </View>
                    <View style={{ flex: 1, ...styles.center }}>
                        <View style={{ width: 100, height: 100, backgroundColor: '#77D353', borderRadius: 50, ...styles.center }}>
                            <View style={{ width: 95, height: 95, backgroundColor: '#ffffff', borderRadius: 50, ...styles.center }}>
                                <Image style={styles.profilePhotoRound} source={require('../../assets/images/face.jpg')}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, ...styles.center }}>
                        <Text style={{ borderRadius: 25, backgroundColor: '#77D353', textAlign: 'center', color: '#ffffff', padding: 5, fontSize: 14, fontWeight: 'bold' }}>Organizador</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10, ...styles.center }}>
                    <View style={{ width: 80 }}>
                        <Text style={styles.title}>{this.props.selectedUser ? this.props.selectedUser.points : 0}</Text>
                        <Text style={styles.text}>puntos</Text>
                    </View>
                    <View style={{ height: 35, width: 2, backgroundColor: '#cccccc', margin: 10 }}></View>
                    <View style={{ width: 80 }}>
                        <Text style={styles.title}>{this.props.selectedUser ? this.props.selectedUser.nEnrollments : 0}</Text>
                        <Text style={styles.text}>actividades</Text>
                    </View>
                </View>

                <Text style={styles.text}>{this.props.selectedUser ? this.props.selectedUser.description : 'No hay descripción'}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePhotoRound: {
        width: 90,
        height: 90,
        borderRadius: 50,
        overflow: 'hidden'
    },
    title: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 18,
        fontFamily: 'Lato-Bold', 
        marginBottom: 5 
    },
    text: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        marginBottom: 5 
    }
});