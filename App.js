/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

// Integracion con react-navigation
import StartSwitchNavigator from './app/navigators/StartSwitchNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(StartSwitchNavigator);


// Integracion con redux
import { Provider } from 'react-redux';
import store from './app/store/store';


// App init
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store = {store}>
        <AppContainer></AppContainer>
      </Provider>
    );
  }
}