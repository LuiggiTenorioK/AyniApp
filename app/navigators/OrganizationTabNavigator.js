import { createMaterialTopTabNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
//Screens
import OrgHomepageView from '../views/Organization/OrgHomepageView';
import OrgActivitiesView from '../views/Organization/OrgActivitiesView';
import OrgContactView from '../views/Organization/OrgContactView';

const TabNavigator = createMaterialTopTabNavigator(
  {
    OrgHomepage: {
      screen: OrgHomepageView,
      navigationOptions: {
        title: "Detalles",
      }
    },
    OrgActivities: {
      screen: OrgActivitiesView,
      navigationOptions: {
        title: "Actividades",
      }
    },
    OrgContact: {
      screen: OrgContactView,
      navigationOptions: {
        title: "Contacto",
      }
    },
  },
  // Opciones de dibujo
  {
    tabBarOptions: {
      activeTintColor: '#6C28E1',
      inactiveTintColor: '#333333',
      labelStyle: {
        fontFamily: 'Lato-Bold'
      },
      style: {
        backgroundColor:'#ffffff',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        shadowRadius: 50,
        marginBottom:10,
        height:50
      }
    },
    swipeEnabled:true,
  }
);
  
export default createAppContainer(TabNavigator);