import React from 'react'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Details() {
  const { name } = useParams();
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds`)
      .then(function (response) {
        // handle success
        setDetails(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [name])

  const selectedName = Details.filter((Details)=>Details.name===name)
  console.log(selectedName)
  return (
    <div>
      <h2>{name}</h2>
      {selectedName.map((Details)=>(
        <div key={Details.name}>
          {Details.description}
        </div>
      ))}
    
    </div>
  )
}
