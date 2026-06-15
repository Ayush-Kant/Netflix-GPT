import React from 'react'
import { API_BASE_URL } from '../utils/constants'

const MovieCard = (movie) => {
    console.log(movie)
  return (
    <div>
      <img src={`${API_BASE_URL}/movie/${movie.poster_path}`} alt='poster'></img>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default MovieCard
