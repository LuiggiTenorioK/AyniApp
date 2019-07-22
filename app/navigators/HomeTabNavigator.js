import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator} from 'react-navigation';

//Screens
import ProfileStackNavigator from './ProfileStackNavigator';
import ExploreStackNavigator from './ExploreStackNavigator';
import MyActivitiesStackNavigator from './MyActivitiesStackNavigator';


export default TabNavigator = createBottomTabNavigator(
  // 3 pestanhas del navigator
  {
    Explore: {
      screen: ExploreStackNavigator,
      navigationOptions: {
        title: "Explorar",
      }
    },
    MyActivity: {
      screen: MyActivitiesStackNavigator,
      navigationOptions: {
        title: "Mis Actividades",
      }
    },
    Profile: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        title: "Perfil",
      }
    },
  },
  // Opciones de dibujo
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName = 'ios-bug';
        if (routeName === 'Explore') {
          iconName = 'ios-compass';
        } else if (routeName === 'MyActivity') {
          iconName = 'ios-people';
        } else if (routeName === 'Profile') {
          iconName = 'ios-person';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#7cd7d7',
      inactiveTintColor: '#333333',
      style: {
        height: 65,
        padding: 10,
      },
    }
  }
);
  
