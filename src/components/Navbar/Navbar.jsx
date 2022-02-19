import React, { Component } from 'react';
import style from './Navbar.module.css';

export default class Navbar extends Component {
  
  render() {
    
    return (

      <section className="  " >
        <nav className = {` navbar navbar-expand-lg  fixed-top navbar-dark d-block  ${style.c} ` } >
        <div className="container">

          <a className="navbar-brand text-uppercase fw-bold fs-3 pt-2 pb-2 text-white" href="#">start bootstrap</a>
          <button   className={`navbar-toggler rounded  d-lg-none d-flex align-items-center ${style['btn']}`}type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <p className={` text-uppercase text-white ${style['navb']} `}>menu</p>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item text-uppercase fw-bold fs-10 p-2">
                <a className={`nav-link text-white ${style['nav-link']}`}  href="#Portfolio">portfolio</a>
              </li>
             
              <li className="nav-item text-uppercase fw-bold fs-10 p-2 ">
                <a className={`nav-link text-white ${style['nav-link']}`} href="#About">about</a>
              </li>
             
              <li className="nav-item text-uppercase fw-bold fs-10 p-2">
                <a className={`nav-link text-white ${style['nav-link']}`} href="#Contact">contact</a>
              </li>
             
             
            </ul>
           
          </div>
        </div></nav></section>
        
    )
  }
}

