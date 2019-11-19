
import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput, Dimensions} from 'react-native';
import OrganizerCard from '../../components/Organizer/OrganizerCard';
import VolunteerCard from '../../components/Volunteer/VolunteerCard';

export default class ActMembers extends Component{

    render(){
      return (
        <View style={styles.container} >
            <Text style= {styles.text}>Organizadores</Text>
            <View style={{alignItems:'center'}}>
            {this.props.activity.organizers.map( organizer => (
                    <OrganizerCard key={organizer.id} name={organizer.name} 
                    username={organizer.username} img={organizer.img}/>))}
            </View>
            
            <Text style= {styles.text}>Voluntarios</Text>
            <View style={{alignItems:'center'}}>    
            {this.props.activity.volunteers.map( volunteer => (
                    <VolunteerCard key={volunteer.id} name={volunteer.name} 
                    username={volunteer.username} img={volunteer.img}/>))}
            </View>

        </View>
      )
    }
    
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  text: {
    textAlign: 'left',
    color: '#343F4B',
    margin: 10,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  subtext: {
    color: '#000000',
    margin: 10,
    fontSize: 13,
    fontFamily: 'Lato-Regular',
    textAlign: 'justify',
  },
  socialMediaContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff', 
  },
});