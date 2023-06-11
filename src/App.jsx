import React from "react";
import "./App.css";
import { Example13 } from "./examples/Example13";
import { StoreProvider } from "./redux/store";
import { ContextProvider } from "./context/ValueContext";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Example14 } from "./examples/Example14";
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient({
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <ContextProvider>
        <StoreProvider>
          <Example14 />
          <ReactQueryDevtools />
        </StoreProvider>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
