import React, { useReducer, useState } from "react";

const init_state = {
  count: 0,
  inpValue: "",
};

function reducer(prevState, action) {
  switch (action.type) {
    case "decrement":
      return { ...prevState, count: action.payload };
    case "Count_Inc":
      return { ...prevState, count: action.payload };
    case "Inp_Val":
      return { ...prevState, inpValue: action.payload };
    default:
      return prevState;
  }
}

const App = () => {
  let [state, dispatch] = useReducer(reducer, init_state);
  // let [state, setState] = useState(0)
  // console.log(dispatch);

  function decrement() {
    let action = {
      type: "decrement",
      payload: state.count - 1,
    };
    dispatch(action);
  }

  function increment() {
    let action = {
      type: "Count_Inc",
      payload: state.count + 1,
    };
    dispatch(action);
  }

  function handleInp(val) {
    let action = {
      type: "Inp_Val",
      payload: val,
    };
    dispatch(action);
  }

  // let mainObj = {
  //   count: 5,
  //   inpValue: "default",
  // };
  // let copy = { ...mainObj, count: 6 };
  // console.log(copy);

  return (
    <div>
      <h1>Счётчик: {state.count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <br />
      <h2>{state.inpValue}</h2>
      <input onChange={(e) => handleInp(e.target.value)} />
    </div>
  );
};

export default App;
