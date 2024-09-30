import { useState } from "react";
const App=()=>{
    const students=['mammu','mamatha','hani']
    const [state,setState]=useState(students)
   
    return(
<>
           <h1>{state[0]}</h1>
          
           <input type="text" value={state[2]}></input>
</>
    )
}
export default App