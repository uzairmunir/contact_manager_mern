import { createContext, useReducer } from 'react';
import ContactReducer from './ContactReducer';
import axios from 'axios';

let initialState = {
  contacts: [],
  success: false,
  error: null,
  loading: false,
  current: null,
};
// Create Context
export const ContactContext = createContext(initialState);

// Context Provider
const ContactProvider = ({ children }) => {
  let [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get All Contacts
  const getContacts = async (token) => {
    const config = {
      headers: {
        ['auth-token']: `${token}`,
      },
    };
    const response = await axios.get('/api/contacts/', config);
    try {
      dispatch({
        type: 'GET_CONTACTS',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_ERROR',
        payload: error.response.data.msg,
      });
    }
  };
  // Create New Contact
  const createContact = async (formData, token) => {
    const config = {
      headers: {
        ['auth-token']: `${token}`,
      },
    };
    const response = await axios.post('/api/contacts/', formData, config);
    try {
      dispatch({
        type: 'CREATE_CONTACT',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_ERROR',
        payload: error.response.data.msg,
      });
    }
  };
  // Delete Contact
  const deleteContact = async (id, token) => {
    const config = {
      headers: {
        ['auth-token']: `${token}`,
      },
    };
    const response = await axios.delete(`/api/contacts/${id}`, config);
    try {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_ERROR',
        payload: error.response.data.msg,
      });
    }
  };
  // Update Contact
  const updateContact = async (contact, token) => {
    const config = {
      headers: {
        ['auth-token']: `${token}`,
      },
    };
    const response = await axios.put(
      `/api/contacts/${contact._id}`,
      contact,
      config
    );
    try {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: 'CONTACT_ERROR',
        payload: error.response.data.msg,
      });
    }
  };
  // Set Current
  const setCurrent = (contact) => {
    dispatch({
      type: 'SET_CURRENT',
      payload: contact,
    });
  };
  // Clear Current
  const clearCurrent = () => {
    dispatch({
      type: 'CLEAR_CURRENT',
    });
  };
  // context values
  let contextValue = {
    getContacts,
    createContact,
    deleteContact,
    updateContact,
    setCurrent,
    clearCurrent,
    ...state,
  };
  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
export default ContactProvider;
