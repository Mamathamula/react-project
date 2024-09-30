import React,{useContext} from 'react'
import { context } from './App'
export default function CompC() {
    let x=useContext(context)
  return (
    <>
    <h2>CompC</h2>
    <h1>welcome to {x}</h1>
        
        </>
  )
}
