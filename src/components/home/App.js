import React from "react";
import action from "../redux/actions/action";
import "./App.module.css";

const App = () => {
  return (
    <div>
      <h1 data-js="counter">0</h1>
      <button data-js="decrement">-</button>
      <button data-js="increment">+</button>
    </div>
  );
};

export default App;
