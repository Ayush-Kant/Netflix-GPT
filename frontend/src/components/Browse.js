import React, { useEffect } from 'react'
import Header from './Header'
import { API_BASE_URL } from '../utils/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTrailer from '../hooks/useTrailer';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gptSearch.showGptSearch) 
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  return (
    <div >
      <Header/>
      {
      showGptSearch ? <GptSearch/> :
      <> 
      <MainContainer />
      <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse
