import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { movieName } = useParams();
  return (
    <div>
      Detail
      <br />
      <h2>{movieName}</h2>
      <br/>
      <p>Details of movie goes here from API...</p>
    </div>
  );
}
