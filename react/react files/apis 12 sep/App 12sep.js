import react from 'react'
import { useState } from 'react'
export default function App(){
  const[state,setState]=useState([])
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => setState(json))
  return(
    <>
    {state.map((list)=>{
 
      return(
        <li>{list.title}</li>
      )
    })}
   
    </>
  )
}
 
 