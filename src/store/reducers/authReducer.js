
const isEmpty = require("is-empty");

//initialState
const initialState = {
  isAuthenticated: false,
  user: {}
};

//authReducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state
      }

    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case 'SIGNOUT_SUCCESS':
      return {
        ...state
      }

    case 'SIGNUP_SUCCESS':
      return {
        ...state
      }

    case 'SIGNUP_ERROR':
      return {
        ...state
      }

    default:
      return state
  }
};

export default authReducer;