import { createStore } from "redux";
import counter from "../reducers/counter";

const store = createStore(counter);

store.subscribe(() =>
  console.log("action triggered (dispatch):", store.getState())
);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

function increment() {
  store.dispatch({ type: "INCREMENT" });
}

function decrement() {
  store.dispatch({ type: "DECREMENT" });
}

export default counter;
