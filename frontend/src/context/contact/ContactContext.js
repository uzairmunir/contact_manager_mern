import { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';

let initialState = {
  contacts: null,
  success: false,
  error: null,
  loading: false,
};
// Create Context
export const ContactContext = createContext(initialState);

// Context Provider
const ContactProvider = ({ children }) => {
  let [state, dispatch] = useReducer(ContactReducer, initialState);

  // context values
  let contextValue = { ...state };
  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
export default ContactProvider;
