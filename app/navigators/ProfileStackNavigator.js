import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStackNavigator } from "react-navigation";
import ProfileView from "../views/Profile/ProfileView";

export default createStackNavigator({
  Profile: {
    screen: ProfileView,
  }
});