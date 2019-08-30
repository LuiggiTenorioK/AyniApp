import { createStackNavigator } from "react-navigation";
import AuthView from "../views/Auth/AuthView";
import SingupView from "../views/Auth/SignupView";
import LoginView from "../views/Auth/LoginView";

export default createStackNavigator({
  Auth: {
    screen: AuthView,
    navigationOptions: {
      header: null,
    }
  },
  Login: {
    screen: LoginView,
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