
import axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";
import { SET_CURRENT_USER } from "./types";
import nextId from "react-id-generator";

// SignIn
export const signIn = (credentials) => {
  return (dispatch) => {
    let tokenGenerated = nextId();
    credentials.token = tokenGenerated;
    axios.post('https://blogdb1.herokuapp.com/login', credentials
    )
      .then(res => {
        //Set token to localStorage
        localStorage.setItem("jwtToken", res.data.token);
        //Set token to Auth header
        setAuthToken(res.data.token);
        dispatch(setCurrentUser(res.data.token));

      }).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });

  }
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//signOut
export const signOut = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "/signin";
}

//signUp
export const signUp = (newUser) => {
  return (dispatch) => {
    axios.post('https://blogdb1.herokuapp.com/registerUsers', newUser)
      .then(response => {
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  }
}
