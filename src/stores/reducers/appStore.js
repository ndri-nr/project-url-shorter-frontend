import { SET_USER, SET_LOGGED_IN } from '../../constants/storeActionConstant';

const initialState = {
  user: { email: '', fullName: '' },
  loggedIn: false,
  restApiBaseUrl: 'https://jsonplaceholder.typicode.com',
};

const appStore = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.data };
    case SET_LOGGED_IN:
      return { ...state, loggedIn: action.data };
    default:
      return state;
  }
};

export default appStore;
