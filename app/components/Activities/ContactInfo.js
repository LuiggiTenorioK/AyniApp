import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput} from 'react-native';

export default class ContactInfo extends Component{

    render(){
      return (
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>{this.props.message}</Text>
            <TextInput style= {styles.contanctInfoTextInput} />
          </View>
      )
    }
    
};

const styles = StyleSheet.create({
  contanctInfoContainer: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contanctInfoText: {
    textAlign: 'left',
    color: '#343F4B',
    marginTop: 6,
    marginBottom: 6,
    fontSize: 12,
    width:'40%',
    padding:10,
    fontFamily: 'Lato-Regular',
  },
  contanctInfoTextInput: {
    textAlign: 'left',
    color: '#343F4B',
    marginTop: 6,
    marginBottom: 6,
    fontSize: 12,
    width:'60%',
    height:40,
    padding:10,
    fontFamily: 'Lato-Regular',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
  },
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    
  },
  map:{
    width:200,
    height:200
  }

});