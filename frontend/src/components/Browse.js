import React, { useEffect } from 'react'
import Header from './Header'
import { API_BASE_URL } from '../utils/constants';

const Browse = () => {
    const NowPlayingMovies = async () =>{
      const data = await fetch(`${API_BASE_URL}/movies/now-playing`)
      const json = await data.json();
      console.log(json)
    } 
  useEffect(()=>{
    NowPlayingMovies()
  },[])
  return (

    <div>
      <Header/>
    </div>
  )
}

export default Browse
