//import Data from './Data.json';

import React, { useState } from 'react';
import './style.css';
 
export default function App() {
  const [style, setStyle] = useState({ fname: 'ajay' });
 
  const update = () => {
    setStyle(Style => {
      if (Style.fname === 'ajay') return { fname: 'sunil' };
      if (Style.fname === 'sunil') return { fname: 'pavan' };
      return { fname: 'ajay' };
    });
  };
 
  return (
    <>
      <h2 className={style.fname}>Hello {style.fname}</h2>
      <button onClick={update}>Update style</button>
    </>
  );
}
 
