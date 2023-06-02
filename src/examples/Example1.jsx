import React from "react";
import { Avatar, LogicalAnd, LogicalOr, Login } from "../components";

export function Example1() {
  const isLoggedIn = true;
  const isOr = false;
  const isAnd = false;

  return (
    <div className="border padding margin">
      <h1>hello world </h1>
      {isLoggedIn ? <Avatar /> : <Login />}
      {isOr || <LogicalOr />}
      {isAnd && <LogicalAnd />}
    </div>
  );
}
