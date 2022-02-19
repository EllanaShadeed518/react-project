import React, { Component } from 'react'
import style from './Contact.module.css';
export default class Contact extends Component {
  render() {
    return (
        <section className=" py-5 bg-white" id="Contact">
        <div className={`   d-flex align-items-center text-center  ${style['e']}`}>
         <div className="container   ">
        
         
             <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>contact me</h2>
             <i className={`fa-solid fa-star ${style['s']}`   }></i>
            <h3 className={`  ${style['linn']}`}> </h3>
         
        
       
       </div>
       
       </div>
       <div className="container">
       <form action="#">
           <div className="form-floating  mb-3  ">
               <input type="text" className={`form-control ${style['bb']}  `}id="name" placeholder='enter your name...' 
            />
               <label htmlFor="name" className={`fs-4 p-3 ${style['coll']}`}>Full name</label>
 
           </div>
           <div className="form-floating  mb-3  ">
               <input type="text" className={`form-control ${style['bb']}  `}id="email" placeholder='enter your name...' 
            />
               <label htmlFor="email" className={`fs-4 p-3 ${style['coll']}`}>Email address</label>
 
           </div>
           <div className="form-floating  mb-3  ">
               <input type="text" className={`form-control ${style['bb']}  `}id="phone" placeholder='enter your name...' 
            />
               <label htmlFor="phone" className={`fs-4 p-3 ${style['coll']}`}>Phone number</label>
 
           </div>
           <div className="form-floating  mb-3  ">
               <input type="text" className={`form-control ${style['bb']}  `}id="message" placeholder='enter your name...' 
            />
               <label htmlFor="message" className={`fs-4 p-3 ${style['coll']}`}>Message</label>
 
           </div>
           <button className={`btn  btn-xl text-white  fs-3 ${style['btn']}`} type="submit"> Send</button>
       </form></div>
       </section>
    )
  }
}
