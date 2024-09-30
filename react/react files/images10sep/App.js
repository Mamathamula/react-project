import Data from './Data.json';

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useState} from 'react';
const App=()=>{
  const [state,setState]=useState(Data)
  return(
    <>
    <h1>React Map</h1>
   
     
    <div className='container'>
        <div className='row'>
          {state.map((list) => {
            return (
              <>
 
         
<div className='col-md-4'>
                  <div class='card'>
                    <img src={list.pic} class="card-img-top" alt="..." height="300px"/>
                    <div class="card-body">
                    <h5 class="card-title">
                      {list.Name}</h5>
                       <p class="card-paragraph">{list.Description}</p>
                  </div>
                </div>
              </div >
                  </>)
        })}
      </div>
    </div >
 
    </>
  )
}
export default App
 