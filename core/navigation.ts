import * as React from 'react';
import {
  StackActions,
  CommonActions,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = React.createRef<any>();

export function push(name: string, params = {}) {
  navigationRef.current?.navigate(name, params);
}

export function navigate(routeName: string, params = {}) {
  navigationRef.current?.navigate(routeName, params);
}

export function navigateStack(routeName: string, params = {}) {
  navigationRef.current?.dispatch(StackActions.push(routeName, params));
}

export function navigateReset(routeName: string) {
  navigationRef.current?.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  });
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}
