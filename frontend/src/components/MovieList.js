import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8 pt-8">
      <h2 className="text-white text-3xl font-bold mb-3">{title}</h2>
      <div className="flex gap-2 overflow-x-scroll overflow-x-auto overflow-y-hidden scrollbar-hide py-6">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};


export default MovieList
