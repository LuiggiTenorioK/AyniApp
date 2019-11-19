
import React, {Component} from 'react';
import {StyleSheet, Text, View ,TextInput, Dimensions} from 'react-native';
import NewsCard from '../News/NewsCard';

export default class ActNews extends Component{

    render(){
      return (
        <View style={styles.container} >
          {this.props.activity.news.map( x => (<NewsCard 
            key ={x.id} 
            name={x.name}
            username={x.username}
            description={x.description}
            role={x.role}
            previewImage={'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/02/16/amazonia_peruana_mitos_peru_viajes_destinos_c.jpg?itok=ajtKp_et&c=7062534651cdf37eb1d7bbc847882ab5'}/>))}
        </View>
      )
    }
    
};

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
});