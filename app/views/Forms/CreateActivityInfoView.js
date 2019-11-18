import React, {Component} from 'react';
import {StyleSheet, Text, View ,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HelpInfo from '../../components/Activities/HelpInfo';
import PurpleNavigationButton from '../../components/Activities/PurpleNavigationButton';


const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class CreateActivityInfoView extends Component{
    colorsA= [
        {id:1,title:'¿CÓMO PLANTEAR UN PROYECTO?',color:'#00A6FF'},
        {id:2,title:'IDENTIFICAR SKATEHOLDERS',color:'#77D353'}];
    colorsB= [
        {id:3,title:'¿CÓMO MOTIVAR A MI EQUIPO?',color:'#7CD7D7'},
        {id:4,title:'ELABORAR UN CRONOGRAMA',color:'#18C4B4'},];
    colorsC= [
        {id:5,title:'ELABORAR UN PRESUPUESTO',color:'#735CD1'},
        {id:6,title:'PROMOCIÓN DE MI PROYECTO',color:'#00C87A'},];
    render(){
      const { routeName } = this.props.navigation.state;
      return (
        <ScrollView style={styles.container} >
            <View style={styles.textContainer} >
                <Text style= {styles.text}>¿Cómo inicio?</Text>
                <Text style= {styles.subtext}> Ayni te ayuda</Text>
            </View>
            
            <View style={styles.cardContainer} >
                {this.colorsA.map( card => (<HelpInfo key={card.id} title={card.title} color={card.color} />))}
            </View>
            <View style={styles.cardContainer} >
                {this.colorsB.map( card => (<HelpInfo key={card.id} title={card.title} color={card.color} />))}
            </View>
            <View style={styles.cardContainer} >
                {this.colorsC.map( card => (<HelpInfo key={card.id} title={card.title} color={card.color} />))}
            </View>
            <View style= {{paddingBottom:15}}></View>
            <Text style= {styles.text}>¿Estás listo?</Text>
            <Text style= {styles.subtext}>Ha llegado el momento de crear un mundo mejor.</Text>
            <View style= {{paddingBottom:80}}></View>
            <PurpleNavigationButton message ={'CONTINUAR'} function = {() =>this.props.navigation.navigate('CreateActivityDescription')} />
        </ScrollView>
      )
    }
    
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  cardContainer: {
    flexDirection:"row",
    justifyContent: 'space-around'
  },
  textContainer: {
    flexDirection:"row",
    justifyContent: 'flex-start'
  },
  text: {
    textAlign: 'left',
    color: '#343F4B',
    marginBottom: 10,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
  subtext: {
    textAlign: 'justify',
    color: '#969FAA',
    marginBottom: 10,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
  },
});