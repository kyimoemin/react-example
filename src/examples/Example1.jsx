import React from "react";
import { Avatar, Login } from "../components";

export function Example1() {
  const isLoggedIn = true;

  return (
    <div className="border padding margin">
      <h1>hello world</h1>
      {isLoggedIn ? <Avatar /> : <Login />}
    </div>
  );
}
