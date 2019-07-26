import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

import {getUser} from '../../store/modules/user/actions';

const img = require('../../assets/images/face.jpg');

class ProfileView extends Component{


    constructor(props) {
      super(props);
      this.props.getUserDispatch(this.props.idUser,this.props.token)
      this.props.navigation.setParams({headerTitle: this.props.username})
    }

    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <View style= {styles.container}>
          <Image style= {styles.photoContainer} source={img}></Image>
          <Text style= {styles.text}>{this.props.name}</Text>
          <Text style= {styles.text}>{this.props.email}</Text>
          <Text style= {styles.text}>You'ree in {routeName}</Text>
          <Text style={styles.text} onPress={() =>this.props.navigation.navigate('Auth')}>Login</Text>
          <Text style={styles.text} onPress={() =>this.props.navigation.navigate('Explore')}>Explore</Text>
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
    photoContainer: {
      width: 100,
      height: 100,
      borderRadius: 100/2
    },
    text: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  const mapStateToProp = state => {
    return {
        token: state.auth.token,
        idUser: state.auth.idUser,
        username: state.user.selectedUser.username,
        name: state.user.selectedUser.name,
        email: state.user.selectedUser.email
    };
}

const mapDispatchToProp = dispatch => {
  return {
      getUserDispatch: (id,token) => {
          dispatch(getUser(id,token));
      }
  };
}

export default connect(mapStateToProp,mapDispatchToProp)(ProfileView);