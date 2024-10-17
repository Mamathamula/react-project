import React from 'react';
import pic from './images/officemouri.jpg';
import gif from './images/gif2.webp';
import java from './images/java.webp';
import html from './images/HTML-CSS.webp';
import sql from './images/sql.jpg';
import test from './images/testing.jpg';
import js from './images/javascript.jpg';
import react from './images/react.jpg';
import im from './images/logo_dark 1.svg'
import im1 from './images/bootstrap1 1.png'
import './Home.css';

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <h1 style={{ fontSize: '40px', textAlign: 'center', margin: '20px 0',color:'red' }}>
            Web Developers....
          </h1>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <h4 id="p1">
              While back end developers make sure everything works behind the scenes,
              front end developers focus on what you see and interact with, making sure it's
              easy to use and looks good on any device. In short, front end developers turn
              designs into live websites and apps that people can use.
            </h4>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <img
              src={pic}
              alt='Profile'
              className='pt-2 img-fluid'
              id="profile"
              style={{ margin: '20px auto', display: 'block' }}
            />
          </div>
        </div>
        <div className="row">
  <div className="col-md-12">
    <h1  style={{color:'red'}} className="custom-heading pl-5">
      How Your Vision Turns Into a Success Story
    </h1>
  </div>
</div>

        <div className='row'>
          <div className='col-md-5'>
            <img src={gif} alt='' id="gif" className='img-fluid' />
          </div>
          <div className='col-md-7'>
            <h3 id="h3">We collaborate</h3>
            <p id="p">We don't just work with you, we integrate seamlessly into your team. This lets us easily understand your challenges, leading to solutions you'll love.</p>
            <h3 id="h3">We speed things up</h3>
            <p id="p">Time is precious, so are your goals. We’re ready to jump in and onboard right away, making a difference from the moment we say hello.</p>
            <h3 id="h3">We embrace unique needs</h3>
            <p id="p">One size never fits all. Bringing in 10 years of experience, we adapt our approach to your vision and challenges that arise along the way.</p>
            <h3 id="h3">We dive deep</h3>
            <p id="p">We never settle for good enough. We research, analyze, and immerse ourselves in your industry, ensuring future-proof results.</p>
            <h3 id="h3">We strategize</h3>
            <p id="p">We plan for the long game, not just quick wins. We're in with you from ideation to implementation, and seeing your success as our own.</p>
          </div>
        </div>

        <div className='row m-2'>
          <center>
            <h1 style={{ fontSize: '70px', color: 'red', marginTop: '50px' }}>Skills</h1>

          </center>
        </div>

        <div className='row m-2'>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={js} className="card-img-top" alt="JavaScript" id="img" />
              <div className="card-body">
                <h5 className="card-title">JavaScript</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the</p>
                <a href="https://www.w3schools.com/js/DEFAULT.asp" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={html} className="card-img-top" alt="HTML & CSS" id="img" />
              <div className="card-body">
                <h5 className="card-title">HTML & CSS</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.w3schools.com/html/" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={react} className="card-img-top" alt="React JS" id="img" />
              <div className="card-body">
                <h5 className="card-title">React JS</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>

        <div className='row m-2'>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={java} className="card-img-top" alt="Java" id="img" />
              <div className="card-body">
                <h5 className="card-title">Java</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={sql} className="card-img-top" alt="SQL" id="img" />
              <div className="card-body">
                <h5 className="card-title">SQL</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.w3schools.com/sql/" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={test} className="card-img-top" alt="Testing" id="img" />
              <div className="card-body">
                <h5 className="card-title">Testing</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
  {/* Uncomment if Footer is needed */}
        <div className='row bg-black text-light p-4 '>
            <div className='col-md-6 fs-2'>
                 <table>
                  <tr style={{width:'120px'}}>
                    <td style={{padding:'25px'}}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="red"><path d="M480.13-488.33q29.83 0 50.8-20.98 20.98-20.99 20.98-50.82 0-29.83-21.03-50.8-21.04-20.98-50.94-20.98t-50.76 21.03q-20.85 21.04-20.85 50.94t20.98 50.76q20.99 20.85 50.82 20.85ZM480-74.02Q316.13-212.7 235.08-330.67q-81.06-117.98-81.06-222.05 0-152.32 98.3-242.91 98.31-90.59 227.68-90.59 129.27 0 227.74 90.59 98.48 90.59 98.48 242.91 0 104.07-81.18 222.05Q643.87-212.7 480-74.02Z"/></svg></td>
                    <td><h3>62, Plot No 3 & 4, Near Inorbit Mall, Opp.Durgam Cheruvu, Madhapur, Serilingampally,<h4> K V Rangareddy Di, Hyderabad,Telangana 500081</h4></h3></td>
                  </tr>
                 <tr>
                    <td style={{padding:'25px'}}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="blue"><path d="M795.48-114.02q-117.44 0-239.01-56.48-121.58-56.48-225.3-160.2-103.95-103.95-160.55-225.65-56.6-121.69-56.6-238.89 0-21.39 14.68-36.18 14.67-14.8 36.06-14.8h140q18.07 0 30.34 11.56 12.27 11.55 16.99 30.38l27 122.17q2.48 16.87-.74 30.4-3.22 13.54-13.13 22.97l-100.96 99.57q25.04 42.08 53.09 78.65 28.04 36.56 62.32 69.61 36.05 37.28 75.25 67.46 39.21 30.19 81.82 52.75l96.19-98.71q11.68-12.68 26.59-17.16 14.91-4.47 30.55-1.52l114.21 25.29q18.83 5.19 30.38 19.1 11.56 13.92 11.56 32.5v136.44q0 21.39-14.8 36.06-14.79 14.68-35.94 14.68Z"/></svg></td>
                    <td><h3>8765432187<br></br><span>1234567834</span><br></br></h3></td>
                  </tr>
                   <tr>  
                    <td style={{padding:'25px'}}><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="orange"><path d="M142.15-154.02q-27.6 0-47.86-20.27-20.27-20.26-20.27-47.86v-515.7q0-27.7 20.27-48.03 20.26-20.34 47.86-20.34h675.7q27.7 0 48.03 20.34 20.34 20.33 20.34 48.03v515.7q0 27.6-20.34 47.86-20.33 20.27-48.03 20.27h-675.7ZM480-454.35l337.85-223v-60.5L480-519.85l-337.85-218v60.5l337.85 223Z"/></svg></td>
                    <td><h4>Mamatha.in@mouritech.com<br></br><span>Pavan.in@mouritech.com</span><br></br><span>Hanivika.in@mouritech.com</span></h4></td>
                  </tr>
                 </table>
            </div>
            <div className='col-md-6'>
                <h3>About the Team</h3>
                <h6>Frontend developers are responsible for creating the visible parts of a website or web application that users interact with directly. They work closely with UX/UI designers and backend developers to implement designs and ensure the technical feasibility of UI/UX designs.</h6>
                <table>
                    <tr>
                        <td style={{paddingLeft:'25px'}}>
                      
                <img src={im} alt='' style={{width:'60px',height:'60px'}}/>
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="gold"style={{paddingLeft:"20PX"}}><path d="M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="red"><path d="M0-360v-240h48v89h108v-89h48v240h-48v-103H48v103H0Zm316 0v-192h-70v-48h188v48h-70v192h-48Zm160 0v-206q0-15 9.5-24.5T510-600h200q15 0 24.5 9.5T744-566v206h-48v-192h-62v150h-48v-150h-62v192h-48Zm326 0v-240h48v192h110v48H802Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="blue"><path d="M414-360q-15 0-24.5-9.5T380-394v-46h48v32h104v-53H414q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T414-600h132q15 0 24.5 9.5T580-566v46h-48v-32H428v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T546-360H414Zm260 0q-15 0-24.5-9.5T640-394v-46h48v32h104v-53H674q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T674-600h132q15 0 24.5 9.5T840-566v46h-48v-32H688v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T806-360H674Zm-520 0q-15 0-24.5-9.5T120-394v-172q0-15 9.5-24.5T154-600h132q15 0 24.5 9.5T320-566v46h-48v-32H168v144h104v-32h48v46q0 15-9.5 24.5T286-360H154Z"/></svg>
                <img src={im1} alt='' style={{width:'100px',height:'100px'}}/>
                       
                </td>
                    </tr>
                </table>
               <div>
                <table style={{padding:"150px"}}>
                    <tr>
                        <td style={{padding:'25px',paddingTop:"50px"}}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"  height="40px"   width="40px" fill="blue"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg> </td>
                        <td style={{padding:'25px',paddingTop:"50px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40px"   width="40px" ><path fill="red" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg></td>
                        <td style={{padding:'25px',paddingTop:"50px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40px"  width="40px" fill="orange"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></td>
                        <td style={{padding:'25px',paddingTop:"50px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="40px"  width="40px" fill="#75FB4C"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg></td>
                    </tr>
                </table>
 
                 </div>
            </div>
          </div>
       




        {/* Uncomment if Footer is needed */}
        {/* <div className='container-fluid'>
          <Footer/>
        </div> */}
      </div>
    </>
  );
}
