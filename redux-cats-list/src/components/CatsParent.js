import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { saveBreedsList } from "../store/actions";

export default function CatsParent() {
  const reduxStore = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("Child has redux values as : ", reduxStore);

  useEffect(() => {
    setTimeout(() => {
      axios.get("https://api.thecatapi.com/v1/breeds").then((response) => {
        console.log(response.data);
        dispatch(saveBreedsList(response.data));
      });
    }, 5000);
  }, []);

  //https://api.thecatapi.com/v1/breeds
  return (
    <div>
      <select name="Breeds" id="breeds">
        {reduxStore.breedsList.map((breed) => (
          <option value={breed.id}>{breed.name}</option>
        ))}
      </select>
    </div>
  );
}
