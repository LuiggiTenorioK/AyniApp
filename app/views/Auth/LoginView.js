import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../../store/modules/auth/actions';


class LoginView extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email: "",
            password: "",
            isLoading: false
        }

    }


    sendLogin = () => {
        this.setState({isLoading:true});
        this.props.loginDispatch({
            email: this.state.email,
            password: this.state.password,
            remember: false
        });
        this.setState({isLoading:false});
    };

    componentDidUpdate(prevProps) {
        if (this.props.isSignIn) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{ ...styles.centerContainer, flex: 1, alignItems: 'stretch', padding: 25 }}>
                    <Text style={styles.text}>Email:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onSubmitEditing={() => this.passwordTextInput.focus()}
                    />
                    <Text style={styles.text}>Contraseña:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        ref={(input) => this.passwordTextInput = input}
                        onSubmitEditing={() => this.sendLogin()}
                    />

                    <TouchableOpacity disabled={this.state.isLoading} style={styles.button} onPress={() => this.sendLogin()} >
                    {this.state.isLoading?
                        <View>
                            <ActivityIndicator size='large' />
                        </View>
                        :
                        <Text style={styles.buttonText}>Entrar</Text>
                    }
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Signup')} >
                        <Text style={styles.buttonText}>Registrate</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>

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

export default connect(mapStateToProp, mapDispatchToProp)(LoginView);

const styles = StyleSheet.create({
    centerContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#7cd7d7',
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
    },
    text: {
        textAlign: 'left',
        color: '#343F4B',
        marginBottom: 5,
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
    textInput: {
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 15,
        color: '#343F4B',
        width: '100%',
        borderWidth: 2,
        borderColor: '#18C4B4',
        borderRadius: 20,
        padding: 10,
        fontFamily: 'Lato-Regular',
    },
});