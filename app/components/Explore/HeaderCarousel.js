import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Carousel from 'react-native-carousel-view';
import CarouselItem from './CarouselItem';

export default class HeaderCarousel extends Component {
    render() {
        return (
            <View>
                <Carousel height={Dimensions.get('window').height * 5 / 16} delay={4000} indicatorAtBottom={false} indicatorColor="#ffffff">
                    <View>
                        <CarouselItem title="Tutores de vida" description="Un programa de educación de Fundación Educa2" previewImage={'https://edu.google.com/images/social_image.jpg'} />
                    </View>
                    <View>
                        <CarouselItem title="Campaña para doggos" description="Ante la duda el que más ayuda, lallalalla asdfasdfasdfasdfasd asfsadfasdf" previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'} />
                    </View>
                    <View>
                        <CarouselItem title="Campaña para doggos 2 - La revelación de los parques" description="Ahora sin gatos asdfasdfasdfasdfasdf" previewImage={'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg'} />
                    </View>
                </Carousel>
            </View>
        )
    }
};