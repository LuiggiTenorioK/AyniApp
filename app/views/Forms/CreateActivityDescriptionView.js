import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput, Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';
import AddOrganizeCard from '../../components/Organizer/AddOrganizeCard';
import OrganizerCard from '../../components/Organizer/OrganizerCard';
import { Input } from 'react-native-elements';


const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class CreateActivityDescriptionView extends Component{
    state = {
      name :"",
      description:"",
    };
    organizers= [{id:'1',name:'Luiggi Tenorio', username:'lbitgreen'}];
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container} >
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
          <Text style= {styles.text}>Organizadores</Text>
          <View style={styles.organizerContainer}>
              {this.organizers.map( organizer => (
                <OrganizerCard key={organizer.id} name={organizer.name} 
                username={organizer.username}/>))}
              <AddOrganizeCard />
          </View>
          
          <View style= {{paddingBottom:65}}></View>
          <PurpleNavigationButton message ={'CONTINUAR'} function = {() =>this.props.navigation.navigate('CreateActivityContact')} />


        </ScrollView>
      )
    }
    
};

const styles = StyleSheet.create({
  inputContainer:{
    backgroundColor: '#ffffff',
    borderBottomColor: '#ffffff',
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
  }
});