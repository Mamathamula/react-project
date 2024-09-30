
import React from'react'
import {useState} from 'react';

export default function App(){
  const emp={
    fname:"ajay"
  }
 const [style,setStyle]=useState(emp)
 const update=()=>{
 (style.fname=="ajay"?setStyle({fname:'sunil'}):setStyle({fname:'pavan'}))
 }
 return(
  <>
  <h2>Hello{style.fname}</h2>
  <button onClick={update}>
    Update style</button>
    </>
 )
}
