import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {signup} from '../../store/modules/auth/actions';

class SignupView extends Component{

    state = {
        email: "",
        password: "",
        name: "",
        username: ""
    };

    sendSignup = () => {
        this.props.signupDispatch({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            username: this.state.username
        });
        if (this.props.isSignIn){
            this.props.navigation.navigate('Home');
        }
    };

    render(){
        return (
            <View>
                
                <Text>Nombre completo:</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({name: text})}
                    placeholder="Nombre completo"
                    onSubmitEditing={()=> this.passwordTextInput.focus()}
                />
                <Text>Nombre de usuario:</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({username: text})}
                    placeholder="Nombre de usuario"
                    onSubmitEditing={()=> this.passwordTextInput.focus()}
                />
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
                    title="Registrate"
                    onPress={() => this.sendSignup()} 
                />
                {this.state.isFetching &&
                    <View>
                        <ActivityIndicator size='large' />
                    </View>
                }
            </View>
            
        )
    }
};

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
        signupDispatch: (data) => {
            dispatch(signup(data));
        }
    };
}

export default connect(mapStateToProp,mapDispatchToProp)(SignupView);