import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "react-navigation";
import ExploreView from "./Profile/ProfileView";

export default createStackNavigator({
  Explore: {
    screen: ExploreView,
    navigationOptions: {
      title: 'Explore',
    }
  }
});