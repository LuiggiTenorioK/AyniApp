import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "react-navigation";
import ExploreView from "../views/Explore/ExploreView";

export default createStackNavigator({
  Explore: {
    screen: ExploreView,
    navigationOptions: {
      title: 'Explorar',
    }
  }
});