import React from "react";
import { useState } from "react";
export default function App() {
  const data= ['Apple','banana','grapes','Watermelon']
const [fruit,setFruit]=useState(data)
 const[search, setSearch]=useState()
 const handler=(e)=>{
  setSearch(e.target.value)
 }
  return (
    <>
    <input type="text" value={search} onChange={handler}/>
  {
    fruit.filter(x=>x.includes(search)).map((list)=>{
      return(
        <>
        <li>{list}</li>
        </>
      )
    }
  )
  }
    </>
  )
}
 