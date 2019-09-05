import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ActivityCard from './ActivityCard';
import UserHeader from './UserHeader';

export default class UserProfile extends Component{

    render(){
        return(
            <ScrollView style={styles.container} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                
                <UserHeader selectedUser={this.props.selectedUser}></UserHeader>

                <Text style={styles.title}>Actividades recientes</Text>

                { (this.props.selectedUser && this.props.selectedUser.recentActivities.length>0)? 
                (<View style={{ alignItems: 'stretch' }}>
                    { this.props.selectedUser.recentActivities.map( activity => ( <ActivityCard 
                        title={activity.title} description={activity.description} 
                        previewImage={activity.imgUrl}/>))
                    }
                </View>)
                :
                (<Text>No hay actividades recientes</Text>)
                }

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
    title: {
        textAlign: 'left',
        color: '#444444',
        fontSize: 18,
        fontFamily: 'Lato-Bold', 
        marginTop: 20, 
        marginBottom: 5
    }
});