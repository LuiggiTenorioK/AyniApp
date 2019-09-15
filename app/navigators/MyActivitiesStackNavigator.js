import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from "react-navigation";
import MyActivitiesView from "../views/MyActivities/MyActivitiesView";
import OrganizationView from '../views/Organization/OrganizationView';
import CreateActivityDescriptionView from '../views/Forms/CreateActivityDescriptionView';
import CreateActivityContactView from '../views/Forms/CreateActivityContactView';
import CreateActivityInfoView from '../views/Forms/CreateActivityInfoView';
import ProjectView from '../views/Project/ProjectView';
import ActivityView from '../views/Activity/ActivityView';

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
    CreateActivityDescription: {
        screen: CreateActivityDescriptionView,
        navigationOptions: {
            title: 'Crear Actividad',
        }
    },
    CreateActivityContact: {
        screen: CreateActivityContactView,
        navigationOptions: {
            title: 'Crear Actividad',
        }
    },
    CreateActivityInfo: {
        screen: CreateActivityInfoView,
        navigationOptions: {
            title: 'Crear Actividad',
        }
    },
    Activity: {
        screen: ActivityView,
        navigationOptions: {
            title: 'Perfil de Actividad',
        }
    },
    Project: {
        screen: ProjectView,
        navigationOptions:{
            headerTransparent: true
        }
        
    }
});