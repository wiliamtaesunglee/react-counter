import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux'
import App from "./components/home/App";


const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT': return state + 1
      case 'DECREMENT': return state - 1
      default: return state
    }
  }
  
  const store = createStore(counter)
  

render(<App store={store}/>, document.getElementById("app"));
