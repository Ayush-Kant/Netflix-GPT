import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const moviesData = useSelector(store => store.movies?.nowPlayingMovies)
  return (
    <div className='absolute pt-96'>
      <MovieList title={"Now Playing"} movies = {moviesData}/>
    </div>
  )
}

export default SecondaryContainer
