import React, { useEffect, useState } from 'react'

export default function C() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation((count) => count + 10);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
