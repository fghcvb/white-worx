import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from './store/actions/authActions'
import * as serviceWorker from './serviceWorker';

// Store
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Check for token to keep user logged in after refersh page / reload page
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  // Set auth token header auth
  setAuthToken(token);
  store.dispatch(setCurrentUser(token));
}

ReactDOM.render(
  <Provider store={store} ><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
