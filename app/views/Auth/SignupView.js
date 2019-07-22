import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

export default class AuthView extends Component{

    render(){
      return (
        <View style= {styles.container}>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
            />
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Nombre"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="default"
                onSubmitEditing={()=> this.password.focus()}
            />
                
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
            />

            <TouchableOpacity style={styles.button}> 
                <Text style={styles.buttonText} onPress={() =>this.props.navigation.navigate('Home')}>Registrar</Text>
            </TouchableOpacity>
        </View>
      )
    }
    
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});