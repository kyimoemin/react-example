/**
 * use case of useEffect and useCallback
 */

import React, { useCallback, useEffect, useState } from "react";

export function Example5() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#000");
  const changeColor = useCallback(() => {
    const isEven = !(count % 2);
    setColor(isEven ? "#f00" : "#0f0");
  }, [count]);

  useEffect(changeColor, [count, changeColor]);

  return <div>
    <p style={{ color }}>{count}</p>
    <button onClick={() => { setCount(c => c + 1); }}>increase</button>
  </div>;
}