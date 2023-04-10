/* eslint-disable import/no-anonymous-default-export */
import { DECREMENT, INCREMENT, INCREMENT_WITH } from "./actionTypes";

export default function (state = {}, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case INCREMENT_WITH:
      return { ...state, counter: state.counter + Number(action.payload) };
    default:
      return state;
  }
}
