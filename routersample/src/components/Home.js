import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const moviesAndDetails = [
    {
      name: "Jaws",
    },
    {
      name: "John_Wick",
    },
    {
      name: "Avatar",
    },
  ];
  return (
    <div>
      <h4>Home</h4> <br />
      <ul>
        {moviesAndDetails.map((movie) => (
          <li key={movie.name}>
            <Link to={`/details/${movie.name}`}> {movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
