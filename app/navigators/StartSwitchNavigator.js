import React, {Component} from 'react';
import { createSwitchNavigator} from 'react-navigation';
import HomeTabNavigator from './HomeTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';

export default MySwitchNavigator = createSwitchNavigator(
    {
        Home: HomeTabNavigator,
        Auth: AuthStackNavigator,
    },
    {
        initialRouteName: 'Auth',
    }
);



