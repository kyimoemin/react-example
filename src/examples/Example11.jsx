import React from "react";
import { useValue, useValueContext } from "../context/ValueContext";


export function Example11() {

  const { setValue, value } = useValueContext();

  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <Text />
    </div>
  );

}


function Text() {
  const value = useValue();
  return <p>the text is: {value}</p>;
}

