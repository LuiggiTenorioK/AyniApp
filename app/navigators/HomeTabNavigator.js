import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator} from 'react-navigation';

//Screens
import ProfileStackNavigator from './ProfileStackNavigator';
import ExploreStackNavigator from './ExploreStackNavigator';
import MyActivitiesStackNavigator from './MyActivitiesStackNavigator';


export default TabNavigator = createMaterialTopTabNavigator(
  // 3 pestanhas del navigator
  {
    Explore: {
      screen: ExploreStackNavigator,
      navigationOptions: {
        title: "Explorar"
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
        let iconName = 'ios-bug';
        if (routeName === 'Explore') {
          iconName = 'ios-compass';
        } else if (routeName === 'MyActivity') {
          iconName = 'ios-people';
        } else if (routeName === 'Profile') {
          iconName = 'ios-person';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarPosition : 'bottom',
    tabBarOptions: {
      activeTintColor: '#7cd7d7',
      inactiveTintColor: '#000000',
      upperCaseLabel: false,
      showIcon: true,
      labelStyle:{
        fontFamily:'Lato-Regular',
        fontSize: 11,
        marginTop:5
      },
      indicatorStyle: {
        opacity:0,
        overflow: 'hidden',
      },
      style: {
        backgroundColor: '#ffffff',
        height: 65,
        padding: 5,
      },
      keyboardHidesTabBar: true, 
    }
  }
);
  
