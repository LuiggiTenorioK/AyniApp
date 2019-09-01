import { createStackNavigator } from "react-navigation";
import ProfileView from "../views/Profile/ProfileView";
import ConfigurationView from "../views/Configuration/ConfigurationView";

export default createStackNavigator({
  Profile: {
    screen: ProfileView,
    /*navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('headerTitle',''),
    })*/
  },
  Configuration: {
    screen: ConfigurationView,
  }
});