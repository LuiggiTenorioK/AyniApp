import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';
import { Input } from 'react-native-elements';
import ContactInfo from '../../components/Activities/ContactInfo';
import LoadingIndicator from '../../components/Activities/LoadingIndicator';
import Picker from '../../components/Activities/Picker';
import axiosInstance from '../../store/axios';
import {Buffer} from 'buffer';
import { connect } from 'react-redux';

class CreateActivityDescriptionView extends Component{
    state = {
      name :"",
      description:"",
      contactName:"",
      contactPhone:"",
      contactMail:"",
      contactAddress:"",
      loading:true,
      selectedProject:0,
      
      organizaciones:[]
    };
    projects=[]
    componentDidMount() {
      
      axiosInstance.post('api/project/get_project_organization',{organizationId:1},
      { headers: {
          'Authorization': 'Basic ' +  Buffer.from('gallardo.a@pucp.pe' + ":" + "Casa12345.").toString('base64')
      }}).then(({ data }) => {
        console.log(data.listOfProjects);
        this.projects= [];
        data.listOfProjects.map(
          x=>this.projects.push({
          label: x.name,
          value: x.id,
        }))
        this.setState({loading:false})
      }).catch(error =>{
        console.log(error.message);
      });
    }
    handleContactName= (contactName) =>{console.log(contactName);this.setState({contactName:contactName})};
    handleContactPhone= (contactPhone) =>{this.setState({contactPhone:contactPhone})};
    handleContactMail= (contactMail) =>{this.setState({contactMail:contactMail})};
    handleContactAddress= (contactAddress) =>{this.setState({contactAddress:contactAddress})};
    
    
    createActivity = ()=>{
      var activity ={
        projectId: 1,
        title: this.state.name,
        description:this.state.description,
        latitude: 12.5687,
        longitude: 11.5448,
        contactName: this.state.contactName,
        telf1: this.state.contactPhone,
        email1: this.state.contactMail,
        direction: this.state.contactAddress,
        
      }
      axiosInstance.post('api/activity/create',activity,
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
        selectedProject: value,
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
          
          <Text style= {styles.text}>Proyecto</Text>
          <View style={styles.pickerContainer}>
              <Picker
                items={this.projects}
                onValueChange={this.handleValueChange}
              />
          </View>
          <Text style= {styles.text}>Nombre de la Actividad</Text>
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
          <Text style= {styles.text}>Contacto</Text>
          <ContactInfo message={'Nombre de Contacto:'} value ={this.state.contactName} handleInput={this.handleContactName} />
          <ContactInfo message={'Número de Teléfono:'} value ={this.state.contactPhone} handleInput={this.handleContactPhone} />
          <ContactInfo message={'Correo Electrónico:'} value ={this.state.contactMail} handleInput={this.handleContactMail} />
          <ContactInfo message={'Dirección:'} value ={this.state.contactAddress} handleInput={this.handleContactAddress} />

          <View style= {{paddingBottom:20}}></View>
          <PurpleNavigationButton message ={'CREAR'} function = {this.createActivity} />

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
export default connect(mapStateToProp)(CreateActivityDescriptionView);

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