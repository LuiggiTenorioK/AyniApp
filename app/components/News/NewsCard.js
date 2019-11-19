import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions ,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import NewsInfo from '../News/NewsInfo';

const img = require('../../assets/images/reciclaje.jpg');

class NewsCard extends Component {

    render() {
        return (
            <View>
                <View style={{...styles.textContainer}}>
                        <Text style={{...styles.textInfo}}>{'@' + this.props.username + ' ha publicado una foto '}</Text>
                        <Text style={{...styles.textTime}}>Hace 2 horas</Text>
                </View>
                <View style={{alignItems:'center', margin:5}}>
                    
                    <Image style= {styles.image} source={{ uri: this.props.previewImage }}></Image>    
                    <View style={styles.box} >
                        <NewsInfo key ={this.props.id} name={this.props.name}
                        username={this.props.username}
                        description={this.props.description}
                        role={this.props.role}/>
                    </View>
                </View>
            </View>
        )
    }
}

const _size_h = (Dimensions.get('window').width-50);

const styles = StyleSheet.create({
    image: {
        width: _size_h, 
        height: 200,
        borderRadius: 10,
        borderWidth:2,
    },
    box: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:-20,
    },
    textContainer: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:5
    },
    textInfo: {
        textAlign:'justify',
        color: '#343F4B',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
    textTime: {
        textAlign:'justify',
        color: '#969FAA',
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        marginBottom: 5
    },
});

export default withNavigation(NewsCard);