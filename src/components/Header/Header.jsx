import React, { Component } from 'react';
import style from './Header.module.css';
export default class Header extends Component {
  render() {
    return (<>
      <section className={` py-5 ${style['bgcolor']}`} >
        <div className=" min-vh-100 d-flex align-items-center text-center">
  <div class="container   ">
  <img src="images/avataaars.svg" className={`img-fluid  ${style['image']}`  } alt="" />
  
      <h2 className={` text-uppercase fw-bold  pt-2 pb-2 text-white ${style['fonts']} ${style['linee']} `}>start bootstrap</h2>
      <i className={`fa-solid fa-star ${style['s']}`   }></i>

     <h3 className={`text-uppercase  fs-5  pt-2 pb-2 text-white  ${style['linn']}`}>  graphic artist - web designer - illustrator</h3>
  
 

</div></div>
</section></>
    )
  }
}