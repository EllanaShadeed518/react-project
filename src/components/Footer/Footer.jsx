import React, { Component } from 'react'
import style from './Footer.module.css';
export default class Footer extends Component {
  render() {
    return (<>
      <section className={`text-center ${style['f']}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 ">
              <h3 className="text-uppercase mb-4 fw-bold">location</h3>
              <p className="lead  fs-5">2215 John Daniel Drive
Clark, MO 65243</p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              
              <h3 className="text-uppercase mb-5 mb-lg-3 fw-bold">around the web</h3>
              <div class="icons text-white  d-flex justify-content-between mx-5 fs-4">
    <i class={`fab fa-facebook rounded-circle p-3  ${style['ic']}`}></i>
    <i class={`fab fa-twitter rounded-circle p-3 ${style['ic']}`}></i>
    <i class={`fab fa-linkedin rounded-circle p-3 ${style['ic']}`}></i>
    <i class={`fa-brands fa-dribbble rounded-circle p-3 ${style['ic']}`}></i>
    
  </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 ">
              <h3 className="text-uppercase mb-4 fw-bold">about freelancer</h3>
              <p className="lead  fs-5">Freelance is a free to use, MIT licensed Bootstrap theme created by <a className={`${style['main-color']} ${style['ha']} fs-5 text-capitalize`} href="*">start bootstrap</a>.</p>
             
            </div>
          </div>
        </div> </section>
        <div className={`py-4 text-white text-center ${style['bgcolor']}`}>
          <div className="container">
          <p>Copyright © Your Website 2021</p></div> 
        </div></>
     
    )
  }
}
