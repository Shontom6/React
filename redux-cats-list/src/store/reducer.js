import { SAVE_BREEDS_LIST } from "./actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case SAVE_BREEDS_LIST:
      console.log(action.payload, " Got payload as");
      return { ...state, breedsList: action.payload };
    case "SAVE_SELECTED_CATS_LIST":
      return { ...state, selectedCatsList: action.payload };
    default:
      return state;
  }
}
