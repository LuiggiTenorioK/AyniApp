import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "react-navigation";
import MyActivitiesView from "../views/MyActivities/MyActivitiesView";
import OrganizationView from '../views/Organization/OrganizationView';

export default createStackNavigator({
  MyActivities: {
    screen: OrganizationView,
    navigationOptions: {
      title: 'Mis Actividades',
    }
  },
  Organization:{
    screen: OrganizationView,
  }
});