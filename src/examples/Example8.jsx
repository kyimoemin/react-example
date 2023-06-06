import React, { useMemo, useState } from 'react';


export function Example8() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#f00");
  const factorialValue = useMemo(function getFactorial() {
    console.log("getting factorial", count);
    return factorial(count);
  }, [count]);

  function factorial(n) {
    if (n < 1) return 1;
    return n * factorial(n - 1);
  }

  function changeColor() {
    setColor(c => {
      if (c === "#f00") return "#00f";
      return "#f00";
    });
  }


  return <div>
    <p style={{ color }}>number: {count}</p>
    <p>factorial: {factorialValue}</p>
    <button onClick={() => { setCount(c => c + 1); }}>increase</button>
    <button onClick={changeColor}>Change color</button>
  </div>;
}