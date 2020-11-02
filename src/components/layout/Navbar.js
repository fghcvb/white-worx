import React, { Component } from "react";
import '../../assets/css/Home.css';
import logo from "../../assets/images/logo.png";
import { Link, animateScroll as scroll  } from "react-scroll";

//Navbar
export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div className="container">
      <Link to="home" className="navbar-brand" >
        <img src={logo} alt="tea mart"  onClick={this.scrollToTop}></img>
      </Link>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500} >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClass="active" to="services"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClass="active" to="ourWork"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>Our Work</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClass="active" to="testimonials"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>Testimonials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClass="active" to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}>Contact</Link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
    )
  }
}

