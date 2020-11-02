import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home';
import About from './components/layout/About';
import Services from './components/layout/Services';
import OurWork from './components/layout/OurWork';
import Testimonials from './components/layout/Testimonials';
import Contact from './components/layout/Contact';

//App
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //Navigation
        <div className="App">
          <Navbar />
          <Home/>
          <About />
          <Services  />
          <OurWork />
          <Testimonials />
          <Contact />
        </div>
    );
  }
}

export default App;