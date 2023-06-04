/**
 * use case of useEffect
 */

import React, { useEffect, useState } from "react";

export function Example5() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    const isEven = !(count % 2);
    setColor(isEven ? "#f00" : "#0f0");
  }, [count]);

  return <div>
    <p style={{ color }}>{count}</p>
    <button onClick={() => setCount(c => c + 1)}>increase</button>
  </div>;
}