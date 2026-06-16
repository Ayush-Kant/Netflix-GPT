import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  return (
    <div className="bg-black  pl-10 pb-10">
      {/* -mt-40 pulls the section up to overlap the bottom of the trailer, exactly like Netflix */}
      <div className='relative z-50 -mt-40'>
      <MovieList title="Now Playing" movies={nowPlayingMovies} />
      <MovieList title="Popular" movies={popularMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <MovieList title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};


export default SecondaryContainer
