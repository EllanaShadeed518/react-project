import React, { Component } from 'react'
import style from './About.module.css';
export default class About extends Component {
  render() {
    return (
        <>
       <section className=  {`${style['bgcolor']} py-5 ` } id="About" >
       <div className={`header   d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>about</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
       
      
      </div>
      
      </div>
     
     <div
      class="container">
      <div class="row">
        <div className="col-lg-6 text-white    ">
            <p className="lead pt-5 text-center fs-5 fw-bold">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        
        <div class="col-lg-6 text-white ">
          <div class="">
            <p className="lead pt-5 text-center fs-5 fw-bold">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center mt-4'>
        <a href="#" className="btn btn-x1 btn-outline-light text-capitalize fs-2 p-4">
        <i className="fa fa-download fw-bold  mx-2"></i>free download!
      
        </a>
    </div>
   </section >
   
     </>
    )
  }
}
