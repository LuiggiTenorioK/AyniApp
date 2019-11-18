import React, { Component } from 'react';
import { Image, StyleSheet, View, Dimensions, Text} from 'react-native';
import {connect} from 'react-redux';

const wait = (ms) => {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

class SplashView extends Component {

    

    tokenVerification = () => {
        // for testing
        //this.props.navigation.navigate('Organization');
        wait(100);
        if (this.props.isSignIn){
            this.props.verifyToken(this.props.token);
            if (this.props.isSignIn){
                this.props.navigation.navigate('Home');
            }
            //else{
            //     this.props.navigation.navigate('Auth');
            // }
        }else{
            this.props.navigation.navigate('Auth');
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isSignIn !== prevProps.isSignIn) {
            if (this.props.isSignIn){
                this.props.navigation.navigate('Home');
            }else{
                this.props.navigation.navigate('Auth');
            }    
        }
    }

    render() {
        return (
            <View style={styles.container} onLayout={()=>this.tokenVerification()}>
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
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: Dimensions.get('window').width*0.8,
        height: Dimensions.get('window').width*0.8
    }
});