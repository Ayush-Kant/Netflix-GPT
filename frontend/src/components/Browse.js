import React, { useEffect } from 'react'
import Header from './Header'
import { API_BASE_URL } from '../utils/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTrailer from '../hooks/useTrailer';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    useNowPlayingMovies();

  return (
    <div>
      
      <Header/>
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
