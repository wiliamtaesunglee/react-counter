import React, { PureComponent } from "react";
import Counter from '../counter/counter'
import { createStore } from 'redux'
import "./App.module.css";

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
    default: return state
  }
}

const store = createStore(counter)

store.dispatch({ type: 'INCREMENT' })

class CounterContainer extends PureComponent {
  constructor() {
    super()

    this.increment = () => {
      store.dispatch({ type: 'INCREMENT' })
    }

    this.decrement = () => {
      store.dispatch({ type: 'DECREMENT' })
    }
   }

   componentDidMount() {
     store.subscribe(() => this.forceUpdate())
   }

   render() {
     return (
       <Counter counter={store.getState()} increment={this.increment} decrement={this.decrement}/>
     )
   }
}

export default CounterContainer;
