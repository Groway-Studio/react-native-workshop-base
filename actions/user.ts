import {SET_USER_LOADING, SET_USER} from '../reducers/user';
import {fetchCall} from '../core/api';
import {
  USER_ID_KEY,
  USER_NAME_KEY,
  USER_REFRESH_KEY,
  USER_TOKEN_KEY,
} from '../config/declarations';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUser = (user: any) => ({
  type: SET_USER_LOADING,
  user,
});

export const setLoadingUser = (loading: boolean) => ({
  type: SET_USER,
  loading: loading,
});

export const persistSession = (data: any) => {
  return async (dispatch: any) => {
    console.info('ON_LOGIN ::: ', data);

    const sessionData = {
      token: data.token,
      name: data.name,
    };

    dispatch(setUser(sessionData));
    const userInfo: [string, string][] = [
      [USER_TOKEN_KEY, data.token],
      [USER_REFRESH_KEY, data.refresh_token],
      [USER_NAME_KEY, data.name],
      [USER_ID_KEY, `${data.id}`],
    ];

    console.info('TOKEN ::: ' + data.token);
    AsyncStorage.multiSet(userInfo);
  };
};

export const getUser = (onError: any) => {
  return (dispatch: any) => {
    dispatch(fetchCall('/user', [], setLoadingUser, setUser, onError));
  };
};
