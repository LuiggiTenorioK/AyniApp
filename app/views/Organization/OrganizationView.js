import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import OrganizationNavigator from '../../navigators/OrganizationTabNavigator';
import OrgHeader from '../../components/Organization/OrgHeader';


class OrganizationView extends Component {
    url = 'https://cdn2.iconfinder.com/data/icons/love-nature/600/green-Leaves-nature-leaf-tree-garden-environnement-512.png';
    render() {
        return (
            <ScrollView>
                <OrgHeader name={'Prismatic'} type={'ONG'} contact={{}} profileImgURL={this.url}></OrgHeader>
                <OrganizationNavigator></OrganizationNavigator>
            </ScrollView>
        )
    }
};

export default OrganizationView;

const styles = StyleSheet.create({
    
});