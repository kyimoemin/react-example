
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counter from "./slices/counter";
import user from "./slices/user";

export const store = configureStore({
  reducer: {
    counter,
    user
  }
});


export function StoreProvider({ children }) {
  return <Provider store={store}>
    {children}
  </Provider>;
}