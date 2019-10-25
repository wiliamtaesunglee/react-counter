import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import App from "./components/home/App";

ReactDOM.hydrate(
   <App/>, document.getElementById("app")
)
  

