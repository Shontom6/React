import { DECREMENT, INCREMENT, INCREMENT_WITH } from "./actionTypes";

export const incrementCount = () => ({
  type: INCREMENT,
});

export const decrementCount = () => ({
  type: DECREMENT,
});

export const incrementWithAction = (value) => ({
  type: INCREMENT_WITH,
  payload: value,
});
