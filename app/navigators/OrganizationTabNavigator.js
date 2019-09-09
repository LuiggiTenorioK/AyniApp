import React, { Fragment } from 'react';

import { ScrollView } from 'react-native';

import { createMaterialTopTabNavigator } from 'react-navigation';
//Screens
import OrgHomepage from '../components/Organization/OrgHomepage';
import OrgActivities from '../components/Organization/OrgActivities';
import OrgContact from '../components/Organization/OrgContact';
import OrgHeader from '../components/Organization/OrgHeader';
import { MaterialTopTabBar } from 'react-navigation-tabs';

// DEPRECATED
const OrganizationTabNavigator = createMaterialTopTabNavigator(
    {
        OrgHomepage: {
            screen: OrgHomepage,
            navigationOptions: {
                title: "Detalles",
            }
        },
        OrgActivities: {
            screen: OrgActivities,
            navigationOptions: {
                title: "Actividades",
            }
        },
        OrgContact: {
            screen: OrgContact,
            navigationOptions: {
                title: "Contacto",
            }
        },
    },
    // Opciones de dibujo
    {
        /*tabBarComponent: props => (<Fragment>
            <OrgHeader></OrgHeader>
            <MaterialTopTabBar {...props}></MaterialTopTabBar>
        </Fragment>),*/
        tabBarOptions: {
            activeTintColor: '#6C28E1',
            inactiveTintColor: '#333333',
            labelStyle: {
                fontFamily: 'Lato-Bold'
            },
            indicatorStyle:{
                height:0,
                overflow:'hidden',
            },
            style: {
                backgroundColor: '#ffffff',
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                height: 50,
                elevation: 1,
                shadowRadius:100,
                zIndex:5
            }
        },
        swipeEnabled: true,
        
    }
);

export default OrganizationTabNavigator;