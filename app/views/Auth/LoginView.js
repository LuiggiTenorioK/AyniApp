import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {login} from '../../store/modules/auth/actions';


class LoginView extends Component {
    state = {
        email: "",
        password: "",
    };

    sendLogin = () => {
        this.props.loginDispatch({
            email: this.state.email,
            password: this.state.password,
            remember: false
        });
        if (this.props.isSignIn){
            this.props.navigation.navigate('Home');
        }
    };

    render() {
        return (
            <View style={{...styles.centerContainer,flex:1,alignItems:'stretch',padding:15}}>
                <Text>Email:</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({email: text})}
                    placeholder="Email"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.passwordTextInput.focus()}
                />
                <Text>Password:</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({password: text})}
                    placeholder="Password"
                    secureTextEntry={true}
                    ref={(input) => this.passwordTextInput = input} 
                />

                <TouchableOpacity style={styles.button} onPress={() => this.sendLogin()} >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() =>this.props.navigation.navigate('Signup')} >
                    <Text style={styles.buttonText}>Registrate</Text>
                </TouchableOpacity>
                {this.state.isFetching &&
                    <View>
                        <ActivityIndicator size='large' />
                    </View>
                }
            </View>
        )
    }
}

const mapStateToProp = state => {
    return {
        isFetching: state.auth.isFetching,
        token: state.auth.token,
        isSignIn: state.auth.isSignIn,
        errorMsg: state.auth.error,
        responseStatus: state.auth.response
    };
}

const mapDispatchToProp = dispatch => {
    return {
        loginDispatch: (data) => {
            dispatch(login(data));
        }
    };
}

export default connect(mapStateToProp,mapDispatchToProp)(LoginView);

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
        marginVertical: 5,
        alignSelf: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    }
});