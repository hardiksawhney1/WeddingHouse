import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Reviews } from './Reviews';
import Carousel from 'react-bootstrap/Carousel';
import { ContactUs } from './ContactUs';
import { Reviews3 } from './Reviews3';
import { Reviews4 } from './Reviews4';

function Reviews2() {
  return (
//  <Carousel data-bs-theme="dark">
//       <Carousel.Item interval={1000}>
//         <div>hi </div>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <div>hi </div>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div>hi </div>
//       </Carousel.Item>
//     </Carousel>
<div >
            <div className='container7'>
            <div className="c3r1">
            <img className="diamond2" src={require("../images/bg-icon.png")}></img>
            <div className="happycouple">
                WHAT SAYS <span style={{color: "#fc3e59"}}>COUPLE</span>
            </div>         
        </div>
        </div>





<div id="carouselExampleDark" class="carousel carousel-dark ">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000000">
      <Reviews />
 
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Reviews3 />
    </div>
    <div class="carousel-item">
        <Reviews4 />
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
<ContactUs />
</div>
  )
}

export default Reviews2;
