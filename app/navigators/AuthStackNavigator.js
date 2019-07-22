import { createStackNavigator } from "react-navigation";
import AuthView from "../views/Auth/AuthView";
import SingupView from "../views/Auth/SignupView";

export default createStackNavigator({
  Auth: {
    screen: AuthView,
    navigationOptions: {
      title: 'Entrar',
    }
  },
  Signup: {
    screen: SingupView,
    navigationOptions: {
      title: 'Registrar',
    }  
  }
});