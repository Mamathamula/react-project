import Data from './Data.json';

import {useState} from 'react';
const App=()=>{
  const [state,setState]=useState(Data)
  return(
    <>
    <h1>React Map</h1>
   
     
      {state.map((list)=>{
        return  <li>{list.name}</li>
      })}
     
     
   
    </>
  )
}
export default App
 