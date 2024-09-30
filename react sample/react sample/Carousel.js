import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import pic from './images/banner.jpg'
import picb from './images/banner2.jpg'
import picc from './images/banner3.jpg' 
import picd from './images/banner4.jpg'
export default function Carousel()
{
    return(
        <div>
            
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picb} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picc} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={picd} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </div>
    )
}