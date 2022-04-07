import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
// import {useSelector} from 'react-redux';
// import {RootState} from '../config/reduxStore';

import Login from './views/login';
import Profile from './views/profile';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  // const isSignIn = useSelector((state: RootState) => state.User.token);

  return (
    <Stack.Navigator
      headerMode={'none'}
      screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
