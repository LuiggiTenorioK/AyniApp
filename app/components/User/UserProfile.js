import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import ActivityCard from './ActivityCard';
const img = require('../../assets/images/face.jpg');

export default class UserProfile extends Component{
    render(){
        return(
            <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <Text style={{...styles.title,marginBottom:5}} >Luiggi Tenorio</Text>
                <Text style={styles.text} >@lbitGreen</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', height: 90, width: 90, flexWrap: 'wrap', padding: 5 }}>
                        <View style={{ borderRadius: 50, backgroundColor: 'red', width: 25, height: 25, margin: 5 }}></View>
                        <View style={{ borderRadius: 50, backgroundColor: 'blue', width: 25, height: 25, margin: 5 }}></View>
                        <View style={{ borderRadius: 50, backgroundColor: 'green', width: 25, height: 25, margin: 5 }}></View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 100, height: 100, backgroundColor: '#77D353', borderRadius: 50 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: 95, height: 95, backgroundColor: '#ffffff', borderRadius: 50 }}>
                                <Image style={styles.profilePhotoRound} source={img}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ borderRadius: 25, backgroundColor: '#77D353', textAlign: 'center', color: '#ffffff', padding: 5, fontSize: 14, fontWeight: 'bold' }}>Organizador</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <View style={{ width: 80 }}>
                        <Text style={styles.title}>1060</Text>
                        <Text style={styles.text}>puntos</Text>
                    </View>
                    <View style={{ height: 35, width: 2, backgroundColor: '#cccccc', margin: 10 }}></View>
                    <View style={{ width: 80 }}>
                        <Text style={styles.title}>23</Text>
                        <Text style={styles.text}>actividades</Text>
                    </View>
                </View>

                <Text style={styles.text}>{'this.props.email'}</Text>
                <Text style={styles.text}>Descripción del perfil.</Text>

                <Text style={{ ...styles.title, marginTop: 20, marginBottom: 5, textAlign:'left'}}>Actividades Organizadas</Text>
                <View style={{ alignItems: 'stretch' }}>
                    <ActivityCard title="Campaña para doggos" description="Ante la duda el que más ayuda, lallalalla asdfasdfasdfasdfasd asfsadfasdf" previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'}></ActivityCard>
                    <ActivityCard title="Campaña para doggos 2 - La revelación de los parques" description="Ahora sin gatos" previewImage={'https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg'}></ActivityCard>
                    <ActivityCard title="Tutores de vida" description="Un programa de educación de Fundación Educa2" previewImage={'https://edu.google.com/images/social_image.jpg'}></ActivityCard>
                </View>

                <View style={{ paddingBottom: 20}}></View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 15,
    },
    profilePhotoRound: {
        width: 90,
        height: 90,
        borderRadius: 50,
        overflow: 'hidden'
    },
    title: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
    },
    text: {
        textAlign: 'center',
        color: '#444444',
        fontSize: 14,
        fontFamily: 'Lato-Regular'
    }
});