import React, {Component} from 'react';
import { createSwitchNavigator} from 'react-navigation';
import HomeTabNavigator from './HomeTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import SplashView from '../views/Splash/SplashView';

export default MySwitchNavigator = createSwitchNavigator(
    {
        Splash: SplashView,
        Home: HomeTabNavigator,
        Auth: AuthStackNavigator,
    },
    {
        initialRouteName: 'Splash',
    }
);



