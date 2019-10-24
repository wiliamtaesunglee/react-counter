import React from "react";
import "./App.module.css";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

console.assert(counter(0, { type: "INCREMENT" }) === 1);

console.assert(counter(1, { type: "INCREMENT" }) === 2);

console.assert(counter(2, { type: "DECREMENT" }) === 1);

console.assert(counter(5, { type: "DECREMENT" }) === 4);

console.assert(counter(5, { type: "SOMETHING" }) === 5);

console.assert(counter(undefined, {}) === 0);

const App = () => {
  return (
    <div>
      <h1>0</h1>
      <button>-</button>
      <button>+</button>
    </div>
  );
};

export default App;
