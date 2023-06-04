import React, { useState } from "react";

export function Example4() {
  const [state, setState] = useState(0);

  function increase() {
    setState(state + 1); // !do not use the state from useState directly, use callback function to get the state data instead
  }

  function decrease() {
    setState((s) => s - 1);
  }

  return (
    <div className="margin">
      <Count value={state} />
      <button onClick={decrease}>decrease</button>
      <button onClick={increase}>increase</button>
    </div>
  );
}


/**
 * 
 * @param {{value:number}} props 
 * @returns 
 */
function Count(props) {
  return <p>{props.value}</p>
}