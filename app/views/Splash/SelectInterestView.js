import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

export default class SelectInterestView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: [
                {
                    key: 0,
                    title: 'Ecología y medioambiente',
                    img: require('../../assets/images/004-sprout.png'),
                    selected: false
                },
                {
                    key: 1,
                    title: 'Salud',
                    img: require('../../assets/images/009-heart.png'),
                    selected: false
                },
                {
                    key: 2,
                    title: 'Animales',
                    img: require('../../assets/images/012-dog.png'),
                    selected: false
                },
                {
                    key: 3,
                    title: 'Asistencia a adultos mayores',
                    img: require('../../assets/images/017-couple.png'),
                    selected: false
                },
                {
                    key: 4,
                    title: 'Educación',
                    img: require('../../assets/images/033-books.png'),
                    selected: false
                },
                {
                    key: 5,
                    title: 'Donaciones',
                    img: require('../../assets/images/011-business-1.png'),
                    selected: false
                },
            ]
        }
    }

    changeSelect = (key) => {
        let aux = [...this.state.categories]
        aux[key].selected = !aux[key].selected;
        this.setState({ ...this.state, categories: aux });
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Selecciona tus intereses: </Text>
                </View>
                <ScrollView>
                    <View style={styles.cardsGrid}>
                        {
                            this.state.categories.map(c =>
                                <TouchableOpacity onPress={() => this.changeSelect(c.key)}
                                    style={{ opacity: c.selected ? 1 : 0.3 }}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image}
                                            source={c.img}
                                        />
                                    </View>
                                    <View style={styles.category}>
                                        <Text style={styles.titleText}>{c.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={{ ...styles.headerText, color: '#7cd7d7' }}>
                            Continuar > </Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        height: Dimensions.get('window').height * 0.075,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    footer: {
        height: Dimensions.get('window').height * 0.075,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderColor: '#ddd',
        padding: 20
    },
    headerText: {
        textAlign: 'center',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: '#111'
    },
    cardsGrid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
    },
    image: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3
    },
    imageContainer: {
        backgroundColor: '#eee',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').width * 0.05,
    },
    category: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#18C4B4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        textAlign: 'justify',
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        margin: 10
    },
});