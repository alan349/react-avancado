import React, { useReducer } from "react";

const iniState = 0;

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, iniState);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("decrement")}>Decrementa</button>
      <button onClick={() => dispatch("increment")}>Incrementa</button>
    </div>
  )
}