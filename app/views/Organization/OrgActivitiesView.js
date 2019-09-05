import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

class OrgActivitiesView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{'Activities'}</Text>
            </View>
        )
    }
};

export default OrgActivitiesView;

const styles = StyleSheet.create({
    container:{
        height: Dimensions.get('window').height*0.4,
        width: Dimensions.get('window').width,
    },
    image: {
        width: Dimensions.get('window').height*0.2,
        height: Dimensions.get('window').height*0.2,
        borderRadius: 50
    }
});