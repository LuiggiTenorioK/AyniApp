import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "react-navigation";
import MyActivitiesView from "../views/MyActivities/MyActivitiesView";
import OrganizationView from '../views/Organization/OrganizationView';
import CreateActivityView from '../views/MyActivities/CreateActivityView';
import CreateActivityContinueView from '../views/MyActivities/CreateActivityContinueView';
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
    CreateActivity: {
        screen: CreateActivityView,
        navigationOptions: {
            title: 'Crear Actividad',
        }
    },
    CreateActivityContinue: {
        screen: CreateActivityContinueView,
        navigationOptions: {
            title: 'Crear Actividad',
        }
    },
    Project: {
        screen: ProjectView,
        navigationOptions:{
            headerTransparent: true
        }
        
    }
});