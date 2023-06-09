import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/slices/counter";


export function Example12() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [state, setSate] = useState("");

  return (
    <div>
      <div>
        <p>count: {count}</p>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input value={state} onChange={e => setSate(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(state)))}>change count</button>
      </div>
    </div>
  );
}