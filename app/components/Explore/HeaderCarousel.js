import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel from 'react-native-carousel-view';
import CarouselItem from './CarouselItem';

export default class HeaderCarousel extends Component {
    render() {
        return (
            <View>
                <Carousel height={Dimensions.get('window').height * 21 / 64} delay={4000} indicatorAtBottom={false} indicatorColor="#ffffff">
                    <View>
                        <CarouselItem title="Tutores de vida" description="Un programa de educación de Fundación Educa2" previewImage={'https://edu.google.com/images/social_image.jpg'} />
                    </View>
                    <View>
                        <CarouselItem title="Albergue de perros" description="Visita la Casa de Doguito de Mimi Martin en Chorrillos" previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'} />
                    </View>
                    <View>
                        <CarouselItem title="Monitoreo y vigilancia de árboles en Ucayali" description="Apoya a los guarda bosque de una concesion de conservacion por la vigilencia y el monitoreo de una zone de proteccion de 40 000 ha de bosques amazonicos." previewImage={'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg'} />
                    </View>
                </Carousel>
            </View>
        )
    }
};