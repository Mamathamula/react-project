import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic1 from './images/books1.jpg'
import pic2 from './images/girl2.webp'
import pic3 from './images/lap.jpg'
export default function Cards()
{
    return(
        <div>
            
            <div class="row">
<div class="card col-md-4">
  <img src={pic1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card col-md-4">
  <img src={pic2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card col-md-4">
  <img src={pic3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> </div>




        </div>
    )
}