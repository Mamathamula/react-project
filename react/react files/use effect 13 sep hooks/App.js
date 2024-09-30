
import React, { useState ,useEffect } from 'react';

function Counter() {
  
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
useEffect(()=>console.log(count),[count])
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
