import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {persistSession} from '../actions/user';
import {APP_NAME} from '../config/declarations';

export const URL_BASE = 'https://my.app.com';

const refreshUserToken = (
  endpoint: any,
  formData: any,
  onLoading: any,
  onSuccess: any,
  onError: any,
) => {
  return async (dispatch: any) => {
    const tokenRefresh =
      (await AsyncStorage.getItem('userTokenRefresh')) || null;
    const URL = URL_BASE + 'api/token/refresh';
    const tokenData = new FormData();
    tokenData.append('refresh_token', tokenRefresh);
    console.log('NEW-TOKEN-REQUEST : AUTO :: ', URL, tokenRefresh);
    fetch(URL, {
      method: 'POST',
      body: tokenData,
    })
      .then(async result => {
        console.log('TOKEN-REFRESHED', result);
        const data = await result.json();
        console.log('TOKEN-DATA', data);
        switch (result.status) {
          case 200:
            dispatch(persistSession(data));
            dispatch(
              fetchCall(endpoint, formData, onLoading, onSuccess, onError),
            );
            break;
          case 401:
            dispatch(onLoading(true));
            // const reset = () => NavigationService.navigateReset('Login');
            Alert.alert(APP_NAME, 'El dispositivo fue quitado', [
              {
                text: 'OK',
              },
            ]);
            // dispatch(onLogout(reset))
            break;
          case 404:
            dispatch(onLoading(true));
            dispatch(
              refreshUserToken(
                endpoint,
                formData,
                onLoading,
                onSuccess,
                onError,
              ),
            );
            break;
          default:
            dispatch(onLoading(false));
            onError(data);
        }
      })
      .catch(function (error) {
        onError(error);
      });
  };
};

export const fetchCall = function (
  endpoint: string,
  data: any,
  loadingAction: any,
  onSuccessAction: any,
  onError: (s: any) => {},
) {
  return (dispatch: any, getState: any) => {
    const URL = URL_BASE + endpoint;
    const bearer_token = getState().User.userToken;
    const bearer = 'Bearer ' + bearer_token;
    dispatch(loadingAction(true));
    const formData = new FormData();

    data.forEach(function (d: any) {
      formData.append(d.name, d.data);
    });
    fetch(URL, {
      headers: {
        Authorization: bearer,
      },
      method: 'POST',
      body: data.length > 0 ? formData : null,
    })
      .then(async result => {
        console.log('FETCH-RESULT', URL, result);
        const fetchData = await result.json();
        console.log('FETCH-DATA', fetchData);
        switch (result.status) {
          case 200:
            dispatch(loadingAction(false));
            dispatch(onSuccessAction(fetchData));
            break;
          case 401:
            /**
             * TOKEN WAS BANNED
             */
            dispatch(loadingAction(false));
            if (Number(fetchData.code) === 403) {
              //   const reset = () => NavigationService.navigateReset('Login');
              Alert.alert(
                APP_NAME,
                data.message || 'El dispositivo fue quitado',
                [
                  {
                    text: 'OK',
                  },
                ],
              );
              //   dispatch(onLogout(reset));
            } else {
              dispatch(
                refreshUserToken(
                  endpoint,
                  formData,
                  loadingAction,
                  onSuccessAction,
                  onError,
                ),
              );
            }
            break;
          default:
            dispatch(loadingAction(false));
            if (onError) {
              onError(data);
            }
            break;
        }
      })
      .catch(function (error) {
        console.log('FETCH-ERROR', URL, error);
        if (onError) {
          onError(error);
        }
      });
  };
};

export async function getKeyStorage(key: string) {
  return await AsyncStorage.getItem(key);
}
