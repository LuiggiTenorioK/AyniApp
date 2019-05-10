import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

//Screens
import ProfileStackView from './ProfileStackView';
import ExploreStackView from './ExploreStackView';
import MyActivitiesStackView from './MyActivitiesStackView';


const TabNavigator = createBottomTabNavigator({
    Explore: ExploreStackView,
    MyActivity: {
      screen: MyActivitiesStackView,
      navigationOptions: {
        title: "My Activities",
      }
    },
    Profile: ProfileStackView,
  },
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
  
const AppContainer = createAppContainer(TabNavigator);

export default class Layout extends Component{
    
    render(){
        return (
            <AppContainer></AppContainer>
        )
    }
    
};

