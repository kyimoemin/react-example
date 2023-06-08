import React, { createContext, useContext, useState } from "react";

const context = createContext({
  value: "",
  setValue: (value) => {
    throw new Error("this function is not initialized yet or, using outside of context provider!");
  }
});

export function useValue() {
  const { value } = useContext(context);
  return value;
}

export const useValueContext = () => useContext(context);


export function ContextProvider({ children }) {
  const [state, setSate] = useState("");

  return <context.Provider value={{ value: state, setValue: (value) => setSate(value) }}>
    {children}
  </context.Provider>;
}
