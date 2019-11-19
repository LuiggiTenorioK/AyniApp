import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView} from 'react-navigation';

import HeaderCarousel from '../../components/Explore/HeaderCarousel';
import SquareActivityCard from '../../components/Explore/SquareActivityCard';

export default class ExploreView extends Component {

    render() {
        return (
            <ScrollView>

                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={{ flex: 3, ...styles.greyContainer }}>
                        <Icon name="md-search" size={20} color="#000000" style={{ flex: 1, marginLeft: 10 }} />
                        <Text style={{ flex: 10, ...styles.searchInput }}>{'   '}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, ...styles.greyContainer, marginLeft: 10 }}>
                        <Text style={styles.nearText}>Cerca de mí</Text>
                    </TouchableOpacity>
                </View>

                <HeaderCarousel></HeaderCarousel>

                <Text style={{ ...styles.title, marginTop: 20, marginBottom: 5}}>Actividades destacadas</Text>
                <View style={{flexWrap:'wrap', flexDirection:'row',marginHorizontal:10}}>
                    <SquareActivityCard title="Campaña para el Friaje - Puno" 
                    previewImage={'https://pbs.twimg.com/media/EAFMQ5mUcAASm_q.jpg'}/>
                    <SquareActivityCard title="Recojo de Basura en Parques" 
                    previewImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLKfonIO9C08hUuOQ8vYS3fkqnwNnsaTjBoGi0NLQXwSzBgGwU&s'} />
                    <SquareActivityCard title="Cuidado de perritos abandonados" 
                    previewImage={'https://blog.oxfamintermon.org/wp-content/uploads/2018/06/voluntariado-con-animales-1.jpg'} />
                    <SquareActivityCard title="Visita el asilo de tu comunidad" 
                    previewImage={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIi4sc5Ru3sT5rxgcMw3upD7OOkSYbm22dAchYFCljQoSKq-kn&s'}/>
                    <SquareActivityCard title="Construcción de viviendas en Ventanilla" 
                    previewImage={'https://static-a.radiocutivalu.org/wp-content/uploads/2017/07/techo-Per%C3%BA.jpg'} />
                    <SquareActivityCard title="Colabora en los Juegos Panamericanos Lima 2019" 
                    previewImage={'https://pbs.twimg.com/media/D_XReozX4AAIk5v?format=jpg&name=small'} />
                </View>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
    greyContainer: {
        borderRadius: 10,
        height: 35,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
    },
    searchInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        paddingVertical: 0,
        marginHorizontal: 5,
        fontSize: 14
    },
    nearText: {
        fontSize: 12,
        color: '#18C4B4'
    },
    title: {
        textAlign: 'left',
        marginHorizontal: 15,
        color: '#444444',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
});