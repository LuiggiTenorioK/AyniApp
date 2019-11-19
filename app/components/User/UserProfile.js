import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ActivityCard from './ActivityCard';
import UserHeader from './UserHeader';

export default class UserProfile extends Component {

    render() {
        return (
            <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                <UserHeader selectedUser={this.props.selectedUser}></UserHeader>

                <Text style={styles.title}>Actividades recientes</Text>

                {/*(this.props.selectedUser && this.props.selectedUser.recentActivities.length > 0) ?
                    (<View style={{ alignItems: 'stretch' }}>
                        {this.props.selectedUser.recentActivities.map(activity => (<ActivityCard
                            title={activity.title} description={activity.description}
                            previewImage={activity.imgUrl} />))
                        }
                    </View>)
                    :
                    (<Text>No hay actividades recientes</Text>)
                    */}
                <ActivityCard title="Monitoreo y Vigilancia de Árboles - Ucayali" description="Apoya a los guarda bosque de una concesion de conservacion por la vigilencia y el monitoreo" previewImage={'https://www.cec.org.co/sites/default/files/sembraton%201.jpg'}/>
                <ActivityCard title="Tutores de vida" description="Un programa de educación de Fundación Educa2" previewImage={'https://edu.google.com/images/social_image.jpg'} />
                <ActivityCard title="Campaña para doggos" description="Ante la duda el que más ayuda" previewImage={'https://images-na.ssl-images-amazon.com/images/I/81cneGCkDmL.jpg'} />
                <View style={{ paddingBottom: 20 }}></View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        padding: 15,
    },
    title: {
        textAlign: 'left',
        color: '#444444',
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginTop: 20,
        marginBottom: 5
    }
});