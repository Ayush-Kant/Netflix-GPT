import React from "react";
import { API_BASE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        src={`${API_BASE_URL}/movie?posterPath=${encodeURIComponent(
          movie.poster_path
        )}`}
        alt={movie.title}
      />

      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieCard;