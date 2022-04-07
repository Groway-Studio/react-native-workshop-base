import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DefaultTheme as RNTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Provider as ReduxProvider, useDispatch} from 'react-redux';

import {setUser} from './actions/user';
import store from './config/reduxStore';
import MainNavigator from './src/main';

import {navigationRef} from './core/navigation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const customRNTheme: Theme = {
  ...RNTheme,
  colors: {
    ...RNTheme.colors,
    background: Colors.black,
  },
};

const Router = () => {
  const dispatch = useDispatch();

  // const darkTheme = useDarkTheme();
  const restoreSession = async () => {
    try {
      const userToken = (await AsyncStorage.getItem('userToken')) || null;
      const userTokenRefresh =
        (await AsyncStorage.getItem('userTokenRefresh')) || null;
      const userName = (await AsyncStorage.getItem('userName')) || null;
      const userData = {
        isSignedOut: userToken ? false : true,
        userToken,
        userTokenRefresh,
        userName,
      };
      dispatch(setUser(userData));
    } catch (e) {
      console.error('SESSION-ERROR: Restoring token failed ', e);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    restoreSession();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer theme={customRNTheme} ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        networkActivityIndicatorVisible
        barStyle={'light-content'}
      />
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <Router />
        </ReduxProvider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
