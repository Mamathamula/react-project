import  { useEffect, useState} from "react";
import React from "react";
export default function App() {
  const [city,setcity]=useState("")
  const[result,setResult]=useState('')
  const changeHandler=e=>{
    setcity(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5f69788245690ac4f0278e217dcc376a`)
 
    .then(res=>res.json())
    .then(data=>{const kelvin=data.main.temp;
      const celsius=kelvin-273.15
      setResult(Math.round(celsius))

    })
  }
  
 

 return(
  <>
<h1>hello</h1>
{result+"deg"}
<form onSubmit={submitHandler}>
  <input type="text" value={city} onChange={changeHandler}>
  </input>
  <br/>
  <input type="submit"/>
</form>
  </>
 )
}