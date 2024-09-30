import { useState } from "react";
const App=()=>{
    const [state,setState]=useState("singale page application")
    const [age,setAge]=useState("22")
    return(
<>
           <h1>{state}</h1>
           <h1>{age}</h1>
<input type="text" value={state}></input>
</>
    )
}
export default App