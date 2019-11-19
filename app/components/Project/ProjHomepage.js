import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-navigation';

import DonationProgress from './DonationProgress';
import DonationUserCard from './DonationUserCard';

class ProjHomepage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ ...styles.image, marginVertical: 15 }}>
                    <Image style={styles.image} source={{ uri: 'https://sfo2.digitaloceanspaces.com/elpaiscr/2019/07/R%C3%ADo-Amazonas.-Redes.jpg' }}></Image>
                </View>
                <Text style={styles.title}>{'Proteger lo nuestro'}</Text>
                <Text style={styles.text}>{'El objetivo de este programa para el futuro del Perú es preservar la reserva natural. La organización se compromete también a procurar alcanzar las metas o resultados establecidos y esperados, generando así un objetivo en común.'}</Text>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ ...styles.title, flex: 3 }}>{'Aportantes'}</Text>
                    <TouchableOpacity style={{ ...styles.button, flex: 1 }}>
                        <Text style={styles.buttonText}>Donar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.text}>{'Objetivo: S/. 15 000.00'}</Text>
                    <Text style={styles.text}>{'Objetivo: S/. 11 241.60'}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:20}}>
                        <DonationProgress width={Dimensions.get('window').width * 0.7} percent={11241.6 / 15000}></DonationProgress>
                    </View>

                    <Text style={{ ...styles.text, marginTop: 10 }}>{'Lista de aportantes:'}</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <DonationUserCard name={'Luiggi Tenorio'} username={'lbitGreen'} amount={45.01} />
                        <DonationUserCard name={'Jazmin Zuasnabar'} username={'zhu'} amount={1150.50} />
                        <DonationUserCard name={'Arian Gallardo'} username={'froz'} amount={3044.25} />
                        <DonationUserCard name={'Daniel Alpiste'} username={'analiste'} amount={3000.33} />
                        <DonationUserCard name={'Moshe Ojeda'} username={'moshe.exe'} amount={1.50} />
                        <DonationUserCard name={'Daniela Cisneros'} username={'cisneros98'} amount={4000.01} />
                    </View>
                </View>
            </View>
        )
    }
};

export default ProjHomepage;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        alignItems: 'stretch',
    },
    image: {
        width: Dimensions.get('window').width - 40,
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        color: '#555555',
        marginBottom: 15
    },
    text: {
        textAlign: 'justify',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        color: '#555555',
        marginBottom: 15
    },
    button: {
        borderRadius: 20,
        backgroundColor: '#77D353',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        elevation: 3
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 14,
        margin: 5,
        fontFamily: 'Lato-Bold',
        letterSpacing: 1
    },
});