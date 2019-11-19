import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import MyActivitiesView from "../views/MyActivities/MyActivitiesView";
import OrganizationView from '../views/Organization/OrganizationView';
import CreateOrganizationView from '../views/Organization/CreateOrganizationView';
import CreateActivityDescriptionView from '../views/Forms/CreateActivityDescriptionView';
import CreateActivityContactView from '../views/Forms/CreateActivityContactView';
import CreateActivityInfoView from '../views/Forms/CreateActivityInfoView';
import ProjectView from '../views/Project/ProjectView';
import ActivityView from '../views/Activity/ActivityView';
import ProjectAdminView from '../views/Project/ProjectAdminView';
import CreateProjectView from '../views/Project/CreateProjectView';

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
    CreateOrganization: {
        screen: CreateOrganizationView,
        navigationOptions:{
            title: "Crear Organización"
        }
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
        navigationOptions: {
            headerTransparent: true
        }

    },
    ProjectAdmin: {
        screen: ProjectAdminView,
        navigationOptions: {
            title: 'Administrador de Proyecto',
        }
    }
    ,
    CreateProject: {
        screen: CreateProjectView,
        navigationOptions: {
            title: 'Crear un Proyecto',
        }
    }
});