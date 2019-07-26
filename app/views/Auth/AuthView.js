import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {login} from '../../store/modules/auth/actions';


class AuthView extends Component {
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
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            <View>
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
                <Button 
                    title="Entrar"
                    onPress={() => this.sendLogin()} 
                />
                <Button 
                    title="Registrate"
                    onPress={() =>this.props.navigation.navigate('Signup')} 
                />
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



export default connect(mapStateToProp,mapDispatchToProp)(AuthView);