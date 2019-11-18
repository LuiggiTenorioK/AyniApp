import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput} from 'react-native';
import { Input } from 'react-native-elements';

export default class ContactInfo extends Component{

    render(){
      return (
          <View style={styles.contanctInfoContainer}>
            <Text style= {styles.contanctInfoText}>{this.props.message}</Text>
            <View style={{width:'70%'}}>
              <Input 
              inputStyle= {styles.contanctInfoTextInput}  
              inputContainerStyle={styles.inputContainer}
              value={this.props.value}          
              onChangeText={this.props.handleInput}
              />
            </View>
          </View>
      )
    }
    
};

const styles = StyleSheet.create({
  contanctInfoContainer: {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width:'100%',
  },
  contanctInfoText: {
    textAlign: 'left',
    color: '#343F4B',
    marginVertical: 6,
    fontSize: 14,
    width:'30%',
    padding:10,
    fontFamily: 'Lato-Regular',
    
  },
  contanctInfoTextInput: {
    textAlign: 'left',
    color: '#343F4B',
    marginVertical: 6,
    fontSize: 14,
    paddingHorizontal:15,
    paddingVertical:10,
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
  },
  inputContainer:{
    backgroundColor: '#ffffff',
    borderBottomColor: '#ffffff',
  },
});