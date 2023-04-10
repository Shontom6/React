import { SAVE_BREEDS_LIST } from "./actionTypes";

export const saveBreedsList = (breedsList) => ({
  type: SAVE_BREEDS_LIST, // Unique ID
  payload: breedsList,
});

export const saveSelectedCatsList = (selectedCatsList) => ({
  type: "SAVE_SELECTED_CATS_LIST",
  payload: selectedCatsList,
});
