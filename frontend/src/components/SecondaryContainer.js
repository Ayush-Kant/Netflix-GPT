import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesData = useSelector(store => store.movies?.nowPlayingMovies);

  return (
    <div className="relative z-40 bg-black -mt-32 pb-10">
      {/* -mt-32 pulls the section up to overlap the bottom of the trailer, exactly like Netflix */}
      <MovieList title="Now Playing" movies={moviesData} />
      <MovieList title="Now Playing" movies={moviesData} />
      <MovieList title="Now Playing" movies={moviesData} />
      
    </div>
  );
};


export default SecondaryContainer
