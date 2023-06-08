import React from "react";
import "./App.css";
import { Example12 } from "./examples/Example12";
import { StoreProvider } from "./redux/store";
import { ContextProvider } from "./context/ValueContext";

function App() {
  return (
    <ContextProvider>
      <StoreProvider>
        <Example12 />
      </StoreProvider>
    </ContextProvider>
  );
}

export default App;
