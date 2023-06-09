import React from "react";
import "./App.css";
import { Example13 } from "./examples/Example13";
import { StoreProvider } from "./redux/store";
import { ContextProvider } from "./context/ValueContext";


function App() {
  return (
    <ContextProvider>
      <StoreProvider>
        <Example13 />
      </StoreProvider>
    </ContextProvider>
  );
}

export default App;
