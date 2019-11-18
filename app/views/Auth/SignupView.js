import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { signup } from '../../store/modules/auth/actions';

class SignupView extends Component {

    state = {
        email: "",
        password: "",
        name: "",
        username: "",
        confirmPassword: "",
        isLoading: false
    };

    sendSignup = () => {
        this.setState({isLoading:true});
        this.props.signupDispatch({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            username: this.state.username
        });
        // if (this.props.isSignIn) {
        //     this.props.navigation.navigate('Home');
        // }
        this.setState({isLoading:false});
    };

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar los props):
        if (this.props.isSignIn !== prevProps.isSignIn) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{ ...styles.centerContainer, flex: 1, alignItems: 'stretch', padding: 25 }}>

                    <Text style={styles.text}>Nombre completo:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ name: text })}
                        placeholder="Nombre completo"
                        onSubmitEditing={() => this.usernameTextInput.focus()}
                    />
                    <Text style={styles.text}>Nombre de usuario:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ username: text })}
                        placeholder="Nombre de usuario"
                        autoCapitalize='none'
                        onSubmitEditing={() => this.emailTextInput.focus()}
                        ref={(input) => this.usernameTextInput = input}
                    />
                    <Text style={styles.text}>Email:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ email: text })}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize='none'
                        onSubmitEditing={() => this.passwordTextInput.focus()}
                        ref={(input) => this.emailTextInput = input}
                    />
                    <Text style={styles.text}>Contraseña:</Text>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onSubmitEditing={() => this.confirmPasswordTextInput.focus()}
                        ref={(input) => this.passwordTextInput = input}
                    />
                    <Text style={styles.text}>Confirma contraseña:</Text>
                    <TextInput style={{ ...styles.textInput, borderColor: this.state.password === this.state.confirmPassword ? '#18C4B4' : 'red' }}
                        onChangeText={(text) => this.setState({ confirmPassword: text })}
                        placeholder="Confirma contraseña"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        ref={(input) => this.confirmPasswordTextInput = input}
                    />
                    <TouchableOpacity disabled={this.state.isLoading} s style={styles.button} onPress={() => this.sendSignup()} >
                        <Text style={styles.buttonText}>Registrate</Text>
                    </TouchableOpacity>
                    {this.state.isFetching &&
                        <View>
                            <ActivityIndicator size='large' />
                        </View>
                    }
                </View>
            </ScrollView>


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

export default connect(mapStateToProp, mapDispatchToProp)(SignupView);


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