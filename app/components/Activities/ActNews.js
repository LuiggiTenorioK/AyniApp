
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
            previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'}/>))}
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