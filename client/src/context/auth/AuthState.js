import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
  // eslint-disable-next-line
  REGEISTER_SUCCESS,
  // eslint-disable-next-line
  REGISTER_FAIL,
  // eslint-disable-next-line
  USER_LOADED,
  // eslint-disable-next-line
  AUTH_ERROR,
  // eslint-disable-next-line
  LOGIN_FAIL,
  // eslint-disable-next-line
  LOGOUT,
  // eslint-disable-next-line
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null
  };
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
