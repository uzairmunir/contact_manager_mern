import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

//Initial State
let InitialState = {
  user: null,
  loading: false,
  success: false,
  error: false,
  message: '',
};
// Create Context
export const AuthContext = createContext(InitialState);

// Context Provider
const AuthProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AuthReducer, InitialState);

  //Context Values
  let contextValues = { state };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
