import React from 'react'
import Nav from './Nav.js'
import Carousel from './Carousel.js'
import Cards from './Cards.js'
import Footer from './Footer.js'

 
 
export default function App1() {
    return (
        <div className='container'>
            <div className='Nav'>
                <Nav/>
            </div>
            <div className='Carsuoel'>
              <Carousel/>
 
            </div>
            <div className='Cards'>
              <Cards/>
             
              </div>
              <div className='Footer'>
                <Footer/>
             
              </div>
        </div>
    );
}
 
 
 
