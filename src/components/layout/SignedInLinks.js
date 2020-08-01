import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import PropTypes from "prop-types";

//SignedInLinks
const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item active">
          <a className="nav-link logOut" onClick={props.signOut}>Log Out</a>
        </li>
      </ul>
    </div>
  )
}

SignedInLinks.propTypes = {
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => {

  return {
    signOut: () => dispatch(signOut())
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)

