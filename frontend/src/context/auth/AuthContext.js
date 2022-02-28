import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
//Initial State
let InitialState = {
  user: user ? user : null,
  loading: false,
  success: false,
  error: null,
  message: '',
};
// Create Context
export const AuthContext = createContext(InitialState);

// Context Provider
const AuthProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AuthReducer, InitialState);

  // Register User
  const registerUser = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.post('/api/users/register/', formData, config);

    try {
      dispatch({
        type: 'REGISTER_USER',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.response.data.msg,
      });
    }
  };
  // Login User
  const loginUser = async (formData) => {
    const config = {
      headers: {
        'CONTENT-TYPE': 'application/json',
      },
    };
    const response = await axios.post('/api/users/login', formData, config);

    try {
      dispatch({
        type: 'LOGIN_USER',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error.response.data.msg,
      });
    }
  };
  //Logout User
  const logoutUser = () => {
    dispatch({
      type: 'LOGOUT_USER',
    });
  };

  //Context Values
  let contextValues = { registerUser, loginUser, logoutUser, ...state };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
