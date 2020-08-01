import React from 'react'
import '../../assets/css/Home.css';
import logo from "../../assets/images/logo.png";
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

//Navbar
const Navbar = (props) => {
 const { auth } = props;
  const links = auth.isAuthenticated ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/home" className="navbar-brand" >
        <img src={logo} alt="tea mart" ></img>
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        {links}
        </li>
      </ul>
    </nav>

  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar)
