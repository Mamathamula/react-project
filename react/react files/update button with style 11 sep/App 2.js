
import React from'react'
import {useState} from 'react';
import'./style.css'
export default function App(){
 const [style,setStyle]=useState('txt')
 const update=()=>{
  setStyle('txt1')
 }
 return(
  <>
  <h2 className={style}>Hello</h2>
  <button onClick={update}>
    Update style</button>
    </>
 )
}
