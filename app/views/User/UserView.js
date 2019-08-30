import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {getUser} from '../../store/modules/user/actions';
import ActivityCard from '../../components/User/ActivityCard';

const img = require('../../assets/images/face.jpg');

class UserView extends Component{

    constructor(props) {
      super(props);
      this.props.getUserDispatch(navigation.getParam('idUser',-1),this.props.token);
      this.props.navigation.setParams({headerTitle: this.props.username});
    }

    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style= {styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

          <Text style= {styles.text} >{this.props.name}</Text>
          <Text style= {styles.text2} >{'@'+this.props.username}</Text>

          <View style = { {flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10,marginBottom:10} }>
            <View style = { {flex:1,alignContent:'center',justifyContent:'center',height:90, width:90, flexWrap:'wrap',padding:5} }>
              <View style= {{borderRadius: 50,backgroundColor:'red',width:25,height:25,margin:5}}></View>
              <View style= {{borderRadius: 50,backgroundColor:'blue',width:25,height:25,margin:5}}></View>
              <View style= {{borderRadius: 50,backgroundColor:'green',width:25,height:25,margin:5}}></View>
            </View>
            <View style = { {flex:1,justifyContent:'center',alignItems:'center'} }>
              <View style = {{justifyContent:'center',alignItems:'center',width:100,height:100,backgroundColor:'#77D353',borderRadius:50}}>
                <View style = {{justifyContent:'center',alignItems:'center',width:95,height:95,backgroundColor:'#ffffff',borderRadius:50}}>
                  <Image style= {styles.profilePhotoRound} source={img}></Image>
                </View>
              </View> 
            </View>
            <View style = { {flex:1,justifyContent:'center',alignItems:'center'} }>
              <Text style = {{borderRadius: 25,backgroundColor:'#77D353',textAlign: 'center',color: '#ffffff', padding: 5, fontSize:14, fontWeight: 'bold'}}>Organizador</Text>
            </View>
          </View>

          <View style = { {flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10,marginBottom:10} }>
            <View style={{width:80}}>
              <Text style={styles.text}>1060</Text>
              <Text style={styles.text2}>puntos</Text>
            </View>
            <View style = {{height: 35,width: 2, backgroundColor:'#cccccc',margin:10}}></View>
            <View style={{width:80}}>
              <Text style={styles.text}>23</Text>
              <Text style={styles.text2}>actividades</Text>
            </View>
          </View>
          
          <Text style= {styles.text2}>{this.props.token}</Text>
          <Text style= {styles.text2}>Descripción del perfil. {routeName}</Text>

          <Text style= {{color:'#444444',fontSize:18,fontWeight:'bold',marginTop:15,marginBottom:10}}>Actividades Organizadas</Text>
          <View style = { {alignItems:'stretch'}}>
            <ActivityCard title="Campaña para doggos" description = "Ante la duda el que más ayuda"></ActivityCard>
            <ActivityCard title="Campaña para doggos 2" description = "Ahora sin gatos"></ActivityCard>
          </View>

          <View style= {{paddingBottom:30}}></View>

        </ScrollView>
      )
    }
    
};


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      padding:15,
    },
    profilePhotoRound: {
      width: 90,
      height: 90,
      borderRadius: 50,
      overflow: 'hidden'
    },
    text: {
      textAlign: 'center',
      color: '#444444',
      fontSize:18,
      fontWeight: 'bold'
    },
    text2: {
      textAlign: 'center',
      color: '#444444',
      fontSize:14,
    }
  });

  const mapStateToProp = state => {
    return {
        token: state.auth.token,
        //idUser: state.auth.idUser,
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

export default connect(mapStateToProp,mapDispatchToProp)(UserView);