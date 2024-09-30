import React, { useMemo, useState} from "react";
 
export default function App() {
  const [addValue, setAddValue] = useState(0);
  const [subtractValue, setSubtractValue] = useState(100);
 
 
 
  const increment = () => {
    setAddValue(addValue + 1);
  };
 
  const decrement = () => {
    setSubtractValue(subtractValue - 1);
  };
   const multiplication=useMemo(function multiply(){
    console.log("hello")
    return addValue*10
   },[addValue])
  return (
    <>
      <div>
       
        <h2> {addValue}</h2>
       <h2>{multiplication}</h2>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <h2> {subtractValue}</h2>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}