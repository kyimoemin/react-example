import React, { createContext, useContext, useState } from "react";


const context = createContext({
  value: "",
  setValue: (value) => {
    throw new Error("this function is not initialized yet or, using outside of context provider!");
  }
});

export function ContextProvider({ children }) {
  const [state, setSate] = useState("");

  return <context.Provider value={{ value: state, setValue: (value) => setSate(value) }}>
    {children}
  </context.Provider>;
}

function useValue() {
  const { value } = useContext(context);
  return value;
}

const useValueContext = () => useContext(context);


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

