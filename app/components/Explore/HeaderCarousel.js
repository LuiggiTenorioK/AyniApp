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
                        <CarouselItem title="Albergue para Perros" description="Visita el albergue para perros ubicado en Chorrillos" previewImage={'https://static4.abc.es/media/sociedad/2016/07/04/PERRO-ABANDONADO-kNKD--620x349@abc.jpg'} />
                    </View>
                    <View>
                        <CarouselItem title="Monitoreo y Vigilancia de Árboles - Ucayali" description="Apoya a los guarda bosque de una concesion de conservacion por la vigilencia y el monitoreo" previewImage={'https://www.cec.org.co/sites/default/files/sembraton%201.jpg'} />
                    </View>
                </Carousel>
            </View>
        )
    }
};