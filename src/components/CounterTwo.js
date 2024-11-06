import React, { useReducer } from "react";

const intialState = {
    firstCounter : 0
}
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {firstCounter: state.firstCounter + action.value}
    case "decrement":
      return {firstCounter: state.firstCounter - action.value}
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const increment = () => dispatch({ type: "increment",value : 1 });
  const decrement = () => dispatch({ type: "decrement",value : 1});
  const reset = () => dispatch({ type: "reset" });
  return (
    <div>
      <div>count : {count.firstCounter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=> dispatch({ type: "increment",value : 5 })}>Increment5</button>
      <button onClick={()=> dispatch({ type: "decrement",value : 5 })}>Decrement5</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterTwo;
