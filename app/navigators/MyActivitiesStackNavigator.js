import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "react-navigation";
import MyActivitiesView from "../views/MyActivities/MyActivitiesView";
import OrganizationView from '../views/Organization/OrganizationView';
import ProjectView from '../views/Project/ProjectView';

export default createStackNavigator({
    MyActivities: {
        screen: MyActivitiesView,
        navigationOptions: {
            title: 'Mis Actividades',
        }
    },
    Organization: {
        screen: OrganizationView,
    },
    Project: {
        screen: ProjectView,
        navigationOptions:{
            headerTransparent: true
        }
        
    }
});