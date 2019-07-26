import { createStackNavigator } from "react-navigation";
import ProfileView from "../views/Profile/ProfileView";

export default createStackNavigator({
  Profile: {
    screen: ProfileView,
    navigationOptions: ({ navigation }) => ({
      title: '@' + navigation.getParam('headerTitle',''),
    })
  }
});