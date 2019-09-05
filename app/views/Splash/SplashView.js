import React, { Component } from 'react';
import { Image, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

class SplashView extends Component {

    componentDidMount(){
        // for testing
        this.props.navigation.navigate('Organization');

        if (this.props.isSignIn){
            this.props.verifyToken(this.props.token);
            if (this.props.isSignIn){
                this.props.navigation.navigate('Home');
            }else{
                this.props.navigation.navigate('Auth');
            }
        }else{
            this.props.navigation.navigate('Auth');
        }
        
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/images/round_logo.png')}></Image>
            </View>
        )
    }
};

const mapStateToProp = state => {
    return {
        token: state.auth.token,
        idUser: state.auth.idUser,
        isSignIn: state.auth.isSignIn,
    };
};

import {verifyToken} from '../../store/modules/auth/actions';
const mapDispatchToProp = dispatch => {
    return {
        verifyToken: (_token) => {
            dispatch(verifyToken({token:_token}));
        }
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(SplashView);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '50%',
        height: '50%'
    }
});