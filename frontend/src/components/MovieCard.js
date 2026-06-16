import React from "react";
import { API_BASE_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
  <div
  className="
    p-1 m-1
    flex-shrink-0
    w-36
    md:w-44
    cursor-pointer
    rounded
    overflow-hidden
    transition-transform
    duration-200
    hover:scale-125
    hover:z-20
  "
>
      <img
        className="w-full h-full object-cover rounded"
        src={`${API_BASE_URL}/movie?posterPath=${encodeURIComponent(
          movie.poster_path
        )}`}
        alt={movie.title}
      />

    </div>
  );
};

export default MovieCard;