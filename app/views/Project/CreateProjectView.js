import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';
import { Input } from 'react-native-elements';
import Map from '../../components/Activities/Map';
import ContactInfo from '../../components/Activities/ContactInfo';
import LoadingIndicator from '../../components/Activities/LoadingIndicator';
import Picker from '../../components/Activities/Picker';
import axiosInstance from '../../store/axios';
import {Buffer} from 'buffer';
import { connect } from 'react-redux';

class CreateProjectView extends Component{
    state = {
      name :"",
      description:"",
   
      loading:true,
      selectedOrganization:0,
      
      
    };
    projects=[];
    organizations=[]

  
        
    
    createProject = ()=>{
      var project ={
        organizationId: 1,
        name: this.state.name,
        imageDirection:this.state.description,
        
      }
      axiosInstance.post('api/project/create',project,
      { headers: {
          'Authorization': 'Basic ' +  Buffer.from('gallardo.a@pucp.pe' + ":" + "Casa12345.").toString('base64')
      }}).then(({ data }) => {
        this.props.navigation.navigate('MyActivities')
      }).catch(function(error)  {
        console.log(error.message);
      });
    }
    handleValueChange = value => {
      this.setState({
        selectedOrganization: value,
      });
    };
   
    render(){
      const { routeName } = this.props.navigation.state;
      if (this.state.loading) {
        return (
            <LoadingIndicator />
        );
      }
      return (
        <ScrollView style={styles.container} >
          
          <Text style= {styles.text}>Organización</Text>
          <View style={styles.pickerContainer}>
              <Picker
                items={this.organizations}
                onValueChange={this.handleValueChange}
              />
          </View>
          <Text style= {styles.text}>Nombre del Proyecto</Text>
          <Input 
            inputStyle  = {styles.textInput}
            onChangeText={(text) => this.setState({name: text})}
            inputContainerStyle={styles.inputContainer}
          />
          <Text style= {styles.text}>Descripción</Text>
          <Input 
              inputStyle = {styles.textArea}
              multiline={true}
              onChangeText={(text) => this.setState({description: text})}
              inputContainerStyle={styles.inputContainer}
          />
         
          <PurpleNavigationButton message ={'CREAR'} function = {this.createProject} />

          <View style= {{paddingBottom:40}}></View>
        </ScrollView>
      )
    }
    
};


const mapStateToProp = state => {
  return {
      token: state.auth.token,
      idUser: state.auth.idUser
  };
}
export default connect(mapStateToProp)(CreateProjectView);

const styles = StyleSheet.create({
  inputContainer:{
    backgroundColor: '#ffffff',
    borderBottomColor: '#ffffff',
  },
  pickerContainer:{
    width:'100%',
    paddingHorizontal:10,
    marginBottom:20,
    marginTop:10
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
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
    width:'100%',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    padding:15,
    fontFamily: 'Lato-Regular',
    fontSize: 15
  },
  textArea: {
    textAlign: 'left',
    textAlignVertical: 'top',
    marginTop: 10,
    marginBottom: 15,
    color: '#343F4B',
    width:'100%',
    borderWidth: 2,  
    borderColor: '#18C4B4',
    borderRadius: 20,
    padding:15,
    fontFamily: 'Lato-Regular',
    fontSize: 15
  },
  organizerContainer:{
    alignItems:'center',
    marginHorizontal:5,
    marginVertical:10,
  },
  picker: {
    fontFamily:'Lato-Regular',
    fontSize: 15,
    padding:10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    color: 'black',
    height: 50, width: 200
  },
});