import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    return (
    <div>
      <h1>{title}</h1>
      <div>
        {
           movies?.map((movie) => <MovieCard movie={movie} />)
        }
      </div>
    </div>
  )
}

export default MovieList
