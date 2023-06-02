import React, { useState } from "react";

export function Example4() {
  const [state, setState] = useState(0);

  function increase() {
    setState(state + 1);
  }

  function decrease() {
    setState((s) => s - 1);
  }

  return (
    <div className="margin">
      <p>{state}</p>
      <button onClick={decrease}>decrease</button>
      <button onClick={increase}>increase</button>
    </div>
  );
}
