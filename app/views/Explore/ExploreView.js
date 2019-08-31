import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                    <SquareActivityCard title="Tutores de vida" previewImage={'https://edu.google.com/images/social_image.jpg'}/>
                    <SquareActivityCard title="Campaña para doggos" previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'} />
                    <SquareActivityCard title="Campaña para doggos 2 - La revelación de los parques" previewImage={'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg'} />
                    <SquareActivityCard title="Tutores de vida" previewImage={'https://edu.google.com/images/social_image.jpg'}/>
                    <SquareActivityCard title="Campaña para doggos" previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'} />
                    <SquareActivityCard title="Campaña para doggos 2 - La revelación de los parques" previewImage={'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg'} />
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