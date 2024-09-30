import React, { useState } from "react";
import './style.css'; 

export default function App() {
  const [color, setColor] = useState("React");

  const handler = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h2 className="header" style={{ background: color }}>{color}</h2>
      <select className="colorSelect" value={color} onChange={handler}>
        <option value="React">React</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
    </>
  );
}
