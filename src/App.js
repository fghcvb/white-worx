import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import PostList from './components/blogs/PostList'
import Post from './components/blogs/Post'
import Footer from './components/layout/Footer'
import PrivateRoute from "./components/private-route/PrivateRoute";

//App
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //Navigation
      <BrowserRouter >
        <div className="App">
          <Navbar />
          <Route exact path='/' component={SignIn} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <PrivateRoute path="/post/:id" component={Post} />
          <PrivateRoute path='/home' component={PostList} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);