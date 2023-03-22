import "./App.css";
import { useState } from "react";
import ChildFuncComp from "./ChildFuncComp";

function App() {
  const [counter, setCounter] = useState(0);
  const [textValue, setTextValue] = useState("");
  const incrementCount = () => {
    setCounter(counter + 1);
  };
  function decrementCount() {
    setCounter(counter - 1);
  }
  const onTextInput = (event) => {
    setTextValue(event.target.value);
  };
  return (
    <div className="App">
      <button onClick={incrementCount}>Increment</button>
      <label>{counter}</label>
      <button onClick={decrementCount}>Decrement</button>
      <input type={"text"} onBlur={onTextInput} />
      Inputted value is : {textValue}
      <ChildFuncComp />
    </div>
  );
}

export default App;
