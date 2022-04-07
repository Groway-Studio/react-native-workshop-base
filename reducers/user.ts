export const SET_USER_LOADING = 'SET_USER_LOADING';
export const SET_USER = 'SET_USER';

const initialState: UserState = {
  name: '',
  userId: '',
  token: null,
  loading: false,
};

const reducer = function (
  state: UserState = initialState,
  action: any,
): UserState {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.user,
      };
    case SET_USER_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    default:
      return state;
  }
};
export default reducer;

export interface UserState {
  name: string;
  userId: string;
  token?: string | null;
  loading: boolean;
}
