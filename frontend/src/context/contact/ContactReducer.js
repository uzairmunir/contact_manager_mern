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

    default: {
      return state;
    }
  }
};

export default ContactReducer;
