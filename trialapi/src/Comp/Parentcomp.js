import React, { useEffect } from 'react';
import axios from "axios";


export default function Parentcomp() {
  const [breedsList, setBreedsList] = React.useState();

  useEffect(()=>{
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
  },[])
  return (
   <></>
  );
}
