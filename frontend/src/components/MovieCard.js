import React from 'react'

const MovieCard = (movie) => {
  return (
    <div>
      <img src={`https://api.themoviedb.org/3/network/${movie?.poster_path}/images`} alt='poster'></img>
      <h1>{movie.title}</h1>
    </div>
  )
}

export default MovieCard
