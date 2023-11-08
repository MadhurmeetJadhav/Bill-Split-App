import React from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import gStyle from './assets/style/gStyle';
import {MainNavigation} from './navigation/MainNavigation';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={[gStyle.globalFlex, gStyle.backgroundWhite]}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
