
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {useState} from 'react';
const App=()=>{
  const students={
    f_name:'Ajay',
    l_name:'kumar',
    place:'pulivendula'
  }
  const [state,setState]=useState(students);
  const demo=()=>{
    // setState({...state,f_name:'vijay'})
    setState({f_name:"Vijay",l_name:'Rao',place:'delhi'})
  }
   
     return(
      <>
      <h2>hello{state.f_name} {state.l_name} place is {state.place}</h2>
      <button onClick={demo}>Update</button>
    </> )
}
export default App
