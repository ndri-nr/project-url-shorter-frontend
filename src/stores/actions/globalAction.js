import { SET_USER, SET_LOGGED_IN } from '../../constants/storeActionConstant';

export const setUser = (data) => ({
  type: SET_USER,
  data,
});

export const setSignIn = (data) => ({
  type: SET_LOGGED_IN,
  data,
});
