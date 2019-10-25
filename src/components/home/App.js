import React, { PureComponent } from "react";
import Counter from '../counter/counter'
import "./App.module.css";

class CounterContainer extends PureComponent {
  constructor() {
    super()

    this.increment = () => {
      this.props.store.dispatch({ type: 'INCREMENT' })
    }

    this.decrement = () => {
      this.props.store.dispatch({ type: 'DECREMENT' })
    }
   }

   componentDidMount() {
     this.props.store.subscribe(() => this.forceUpdate())
   }

   render() {
     return (
       <Counter counter={this.props.store.getState()} increment={this.increment} decrement={this.decrement}/>
     )
   }
}

export default CounterContainer;
