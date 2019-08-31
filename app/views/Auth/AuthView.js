import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button,TouchableOpacity} from 'react-native';

class AuthView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4, backgroundColor: "#7cd7d7", ...styles.centerContainer }}>
                    <View style={{ flex: 1, backgroundColor: '#cccccc' }}></View>
                    <View style={{ flex: 3, ...styles.centerContainer }}>
                        <Image style={{ ...styles.image }} 
                            source={require('../../assets/images/solidarity.png')}></Image>
                    </View>
                </View>
                <View style={{ flex: 3, ...styles.centerContainer }}>
                    <Text style={styles.title} onPress={() => this.props.navigation.navigate('Explore')}>Bienvenido a Ayni</Text>
                    <Text style={styles.quote}>
                        {'Ningún acto de bondad, por más pequeño que sea, es un desperdicio \n- Esopo -'}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')} >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signup')} >
                        <Text style={styles.buttonText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 210,
        height: 210,
        padding: 40
    },
    title: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 24,
        fontFamily: 'Lato-Regular',
        paddingHorizontal: 40,
        paddingBottom:20
    },
    quote: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        paddingHorizontal: 40,
        lineHeight: 20,
        paddingBottom:10
    },
    button: {
        borderRadius:10,
        backgroundColor:'#7cd7d7',
        height: 45,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    }
});

export default AuthView;