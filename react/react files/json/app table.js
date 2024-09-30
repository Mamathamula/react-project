import Data from './Data.json';

import {useState} from 'react';
const App=()=>{
  const [state,setState]=useState(Data)
  return(
    <>
    <h1>React Map</h1>
   <table border="1px">
     
      {state.map((list)=>{
        return  <tr><td>{list.name}</td>
                    <td>{list.place}</td>
                    <td>{list.email}</td>
                       </tr>
      })}
     
     
     </table>
    </>
 
  )
}
export default App
 