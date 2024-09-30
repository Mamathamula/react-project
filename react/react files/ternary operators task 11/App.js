import React, { useState } from 'react';
import './style.css';
 
export default function App() {
  const emp = {
    fname: 'anil'
  };
 
  const [style, setStyle] = useState(emp);
  const [state, setState] = useState('txt');
 
  const update = () => {
    
    const newFname = style.fname === 'anil' ? 'sunil' : style.fname === 'sunil' ? 'pavan' : 'anil';
    const newState = state === 'txt' ? 'txt1' : state === 'txt1' ? 'txt2' : 'txt';
 
    setStyle({ fname: newFname });
    setState(newState);
  };
 
  return (
    <>
      <h2 className={state}>hello {style.fname}</h2>
      <button onClick={update}>update style</button>
    </>
  );
}