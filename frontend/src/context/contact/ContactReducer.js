const ContactReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACTS': {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        contacts: action.payload,
      };
    }
    case 'CREATE_CONTACT': {
      return {
        ...state,
        success: true,
        error: null,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'DELETE_CONTACT': {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };
    }
    case 'UPDATE_CONTACT': {
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    }
    case 'SET_CURRENT': {
      return {
        ...state,
        current: action.payload,
      };
    }
    case 'CLEAR_CURRENT': {
      return {
        ...state,
        current: null,
      };
    }
    case 'FILTER': {
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.phone.match(regex);
        }),
      };
    }
    case 'CLEAR_FILTER': {
      return {
        ...state,
        filtered: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default ContactReducer;
