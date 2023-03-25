import React, { useEffect, useState } from "react";
import axios from "axios";
import ListBreeds from "./ListBreeds";
import CatsImageComp from "./CatsImageComp";

export default function PhotosParent() {
  const [breedsList, setBreedsList] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then(function (response) {
        // handle success
        setBreedsList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div style={{ margin: "20px 40%" }}>
      <ListBreeds breedsList={breedsList} setSelectedBreed={setSelectedBreed} />
      <CatsImageComp selectedBreed={selectedBreed} />
    </div>
  );
}
