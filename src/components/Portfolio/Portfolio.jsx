import React, { Component } from 'react';
import style from './Portfolio.module.css';
export default class  extends Component {
  render() {
    return (<> 
<section className=" py-5 bg-white" id="Portfolio" >
        <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>portfolio</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
       
      
      </div>
      
      </div>
      <div className="container  ">
        <div className="row">
          <div className="col-md-4 mb-2 ">
            
            <div className={`tab-item ${style['h']} ${style['p-item']}  `}>
              <img src="images/cabin.png" className="img-fluid   rounded" alt=""/>
              <div className={`${style['over']}   `}  >
              <button type="button" className="btn h-100 w-100  d-flex   align-items-center justify-content-center " data-bs-toggle="modal" data-bs-target="#exampleModal1">
  

  <div className={`  ${style['fontss']} text-white   `}>
  <i className="fa-solid fa-plus "></i>
  </div>
  </button>
                            
                        </div>
          </div>
          </div>

          <div className="col-md-4 mb-2">
            <div className={`tab-item ${style['h']} ${style['p-item']}  `}>
              <img src="images/cake.png" className="img-fluid  rounded" alt=""/>
              <div className={`${style['over']}`}>
              <button type="button" className="btn h-100 w-100  d-flex   align-items-center justify-content-center " data-bs-toggle="modal" data-bs-target="#exampleModal2">
  

                            <div className={`  ${style['fontss']} text-white   `}>
                            <i className="fa-solid fa-plus "></i>
                            </div>
                            </button>
                        </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className={`tab-item ${style['h']} ${style['p-item']}  `}>
              <img src="images/circus.png" className="img-fluid  rounded" alt=""/>
              <div className={`${style['over']}`}>
              <button type="button" className="btn h-100 w-100  d-flex   align-items-center justify-content-center " data-bs-toggle="modal" data-bs-target="#exampleModal3">
  

  <div className={`  ${style['fontss']} text-white   `}>
  <i className="fa-solid fa-plus "></i>
  </div>
  </button>
                            
                        </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className={`tab-item ${style['h']} ${style['p-item']}  `}>
              <img src="images/game.png" className="img-fluid  rounded" alt=""/>
              <div className={`${style['over']}`}>
              <button type="button" className="btn h-100 w-100  d-flex   align-items-center justify-content-center " data-bs-toggle="modal" data-bs-target="#exampleModal4">
  

  <div className={`  ${style['fontss']} text-white   `}>
  <i className="fa-solid fa-plus "></i>
  </div>
  </button>
                            
                        </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className={`tab-item ${style['h']} ${style['p-item']}  `}>
              <img src="images/safe.png" className="img-fluid  rounded" alt=""/>
              <div className={`${style['over']}`} >
              <button type="button" className="btn h-100 w-100  d-flex   align-items-center justify-content-center " data-bs-toggle="modal" data-bs-target="#exampleModal5">
  

  <div className={`  ${style['fontss']} text-white   `}>
  <i className="fa-solid fa-plus "></i>
  </div>
  </button>
                            
                        </div>
            </div>
          </div>
          <div className="col-md-4 mb-2">
            <div className={`tab-item ${style['h']} ${style['p-item']}  `}>
              <img src="images/submarine.png" className="img-fluid  rounded" alt=""/>
              <div className={`${style['over']}`}>
              <button type="button" className="btn h-100 w-100  d-flex   align-items-center justify-content-center " data-bs-toggle="modal" data-bs-target="#exampleModal6">
  

  <div className={`  ${style['fontss']} text-white   `}>
  <i className="fa-solid fa-plus "></i>
  </div>
  </button>
                            
                        </div>
            </div>
          </div>
   
        </div>
      </div>
      



<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>log cabin</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
           
      
      </div>
      
      </div>
      <div className="container">
        <div className="row">
      <div className="col-md-12"><img src="images/cabin.png" className="img-fluid   rounded" alt=""/></div>
     <div className=""> <p className={` text-black lead `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p></div>
      </div>
      <div className="modal-footer d-flex justify-content-center ">
        <button type="button" className={`btn ${style['bcolor']} text-capitalize text-white text-center `} data-bs-dismiss="modal"><i className="fa-solid fa-xmark mx-3"></i>close window</button>
      
      </div>
    </div>
  </div>
</div></div></div>


<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>tasty cake</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
           
      
      </div>
      
      </div>
      <div className="container">
        <div className="row">
      <div className="col-md-12"><img src="images/cake.png" className="img-fluid   rounded" alt=""/></div>
     <div className=""> <p className={` text-black lead `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p></div>
      </div>
      <div className="modal-footer d-flex justify-content-center ">
        <button type="button" className={`btn ${style['bcolor']} text-capitalize text-white text-center `} data-bs-dismiss="modal"><i className="fa-solid fa-xmark mx-3"></i>close window</button>
      
      </div>
    </div>
  </div>
</div></div></div>

<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>circus tent</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
           
      
      </div>
      
      </div>
      <div className="container">
        <div className="row">
      <div className="col-md-12"><img src="images/circus.png" className="img-fluid   rounded" alt=""/></div>
     <div className=""> <p className={` text-black lead `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p></div>
      </div>
      <div className="modal-footer d-flex justify-content-center ">
        <button type="button" className={`btn ${style['bcolor']} text-capitalize text-white text-center `} data-bs-dismiss="modal"><i className="fa-solid fa-xmark mx-3"></i>close window</button>
      
      </div>
    </div>
  </div>
</div></div></div>

<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>controller</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
           
      
      </div>
      
      </div>
      <div className="container">
        <div className="row">
      <div className="col-md-12"><img src="images/game.png" className="img-fluid   rounded" alt=""/></div>
     <div className=""> <p className={` text-black lead `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p></div>
      </div>
      <div className="modal-footer d-flex justify-content-center ">
        <button type="button" className={`btn ${style['bcolor']} text-capitalize text-white text-center `} data-bs-dismiss="modal"><i className="fa-solid fa-xmark mx-3"></i>close window</button>
      
      </div>
    </div>
  </div>
</div></div></div>

<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>locked safe</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
           
      
      </div>
      
      </div>
      <div className="container">
        <div className="row">
      <div className="col-md-12"><img src="images/safe.png" className="img-fluid   rounded" alt=""/></div>
     <div className=""> <p className={` text-black lead `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p></div>
      </div>
      <div className="modal-footer d-flex justify-content-center ">
        <button type="button" className={`btn ${style['bcolor']} text-capitalize text-white text-center `} data-bs-dismiss="modal"><i className="fa-solid fa-xmark mx-3"></i>close window</button>
      
      </div>
    </div>
  </div>
</div></div></div>
<div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className={`  d-flex align-items-center text-center  ${style['e']}`}>
        <div className="container   ">
       
        
            <h2 className={` text-uppercase fw-bold   pb-2  ${style['fonts']} ${style['linee']} `}>submarine</h2>
            <i className={`fa-solid fa-star ${style['s']}`   }></i>
           <h3 className={`  ${style['linn']}`}> </h3>
        
           
      
      </div>
      
      </div>
      <div className="container">
        <div className="row">
      <div className="col-md-12"><img src="images/submarine.png" className="img-fluid   rounded" alt=""/></div>
     <div className=""> <p className={` text-black lead `}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p></div>
      </div>
      <div className="modal-footer d-flex justify-content-center ">
        <button type="button" className={`btn ${style['bcolor']} text-capitalize text-white text-center `} data-bs-dismiss="modal"><i className="fa-solid fa-xmark mx-3"></i>close window</button>
      
      </div>
    </div>
  </div>
</div></div></div>
      
</section>
</>

    )
  }
}
