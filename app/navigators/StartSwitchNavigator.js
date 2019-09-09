import React, { Component } from 'react';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import HomeTabNavigator from './HomeTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import SplashView from '../views/Splash/SplashView';

import { Transition } from 'react-native-reanimated';

export default MySwitchNavigator = createAnimatedSwitchNavigator(
    {
        Splash: SplashView,
        Home: HomeTabNavigator,
        Auth: AuthStackNavigator,
    },
    {
        initialRouteName: 'Splash',
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-bottom"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
);



