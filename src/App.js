import React, { Component } from 'react'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Information from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <>
      
      <Navbar/>
     < Header/>
     < Portfolio/>
     <About/>
     <Contact/>
     <Information/>

      </>

    )
  }
}

