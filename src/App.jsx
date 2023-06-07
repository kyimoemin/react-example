import React from "react";
import "./App.css";
import { ContextProvider, Example11 } from "./examples/Example11";

function App() {
  return (
    <ContextProvider>
      <Example11 />
    </ContextProvider>
  );
}

export default App;
