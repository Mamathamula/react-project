import React, { useState, useEffect } from "react";

export default function App() {
  const [addValue, setAddValue] = useState(0);
  const [subtractValue, setSubtractValue] = useState(100);

  useEffect(() => {
    console.log('Component mounted or updated');
  }, [addValue, subtractValue]);

  const increment = () => {
    setAddValue(addValue + 1);
  };

  const decrement = () => {
    setSubtractValue(subtractValue - 1);
  };

  return (
    <>
      <div>
        <h2> {addValue}</h2>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <h2> {subtractValue}</h2>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

