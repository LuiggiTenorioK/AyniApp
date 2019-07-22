import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "react-navigation";
import MyActivitiesView from "../views/MyActivities/MyActivitiesView";

export default createStackNavigator({
  MyActivities: {
    screen: MyActivitiesView,
    navigationOptions: {
      title: 'Mis Actividades',
    }
  }
});