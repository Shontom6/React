import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, incrementWithAction } from "../redux/actions";

export default function ParentComp() {
  const reduxStore = useSelector((store) => store);
  const dispatch = useDispatch();
  const onPlusClick = () => {
    dispatch(incrementCount());
  };
  const onMinusClick = () => {
    dispatch(decrementCount());
  };
  const incrementWith = (event) => {
    if (event.target) {
      const value = event.target.value;
      dispatch(incrementWithAction(value));
    }
  };
  return (
    <div>
      <button onClick={onPlusClick}>+</button>
      <h2>Counter value is : {reduxStore.counter}</h2>
      <button onClick={onMinusClick}>-</button> <br /> <br />
      Increment count with value :{" "}
      <input type={"text"} onBlur={incrementWith} />
    </div>
  );
}
