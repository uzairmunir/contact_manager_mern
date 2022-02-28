const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_USER': {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
        error: null,
      };
    }
    case 'LOGIN_USER': {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
        error: null,
      };
    }
    case 'LOGOUT_USER': {
      localStorage.removeItem('user');
      return {
        ...state,
        loading: false,
        success: false,
        user: null,
        error: null,
      };
    }
    case 'AUTH_ERROR': {
      localStorage.removeItem('user');
      return {
        ...state,
        loading: true,
        success: false,
        user: null,
        error: action.payload,
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
