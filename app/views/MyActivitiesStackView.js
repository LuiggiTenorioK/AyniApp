import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "react-navigation";
import MyActivitiesView from "./Profile/ProfileView";

export default createStackNavigator({
  MyActivities: {
    screen: MyActivitiesView,
    navigationOptions: {
      title: 'My Activities',
    }
  }
});