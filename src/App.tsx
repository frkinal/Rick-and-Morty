import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {AppStack} from '@navigators';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
