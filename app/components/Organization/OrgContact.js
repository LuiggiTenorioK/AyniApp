import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation';

class OrgContactView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{'Dirección: Campus principal Av. Universitaria 1801, San Miguel Lima 32, Perú'}</Text>
                <Text style={styles.text}>{'Teléfono: 626-2000'}</Text>
                <Text style={styles.text}>{'Email: admin@pucp.edu.pe'}</Text>
                {/*<Text style={styles.text} onPress={()=>this.props.navigation.navigate({routeName:'Organization',params: {id:4},key:'Org4'})}>{this.props.navigation.getParam('id',0)}</Text>*/}
            </View>
        )
    }
};

export default withNavigation(OrgContactView);

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        padding:20,
        alignItems: 'stretch',
    },
    text: {
        textAlign: 'justify',
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: '#555555',
        marginBottom: 5
    }
    
});