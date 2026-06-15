import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
    const mainVideo = useSelector(store => store.movies?.nowPlayingMovies?.[0])
    const videoTitle = mainVideo?.title
    const videoOverview = mainVideo?.overview
  return (
    <div className="absolute top-0 left-0 z-20 pt-96 px-12 text-white ">
      <h1 
      className='text-6xl font-bold text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.9)] '>{videoTitle}</h1>
      <h3 
      className='w-6/12 text-lg text-white [text-shadow:1px_1px_6px_rgba(0,0,0,0.9)]'>{videoOverview}</h3>
      <button className='border border-s bg-white text-black p-1 px-4 m-4 mx-2 rounded-lg hover:opacity-80'>▶︎  Play</button>
      <button className='border border-s bg-gray-500 text-white p-1 px-4 m-4 mx-2 rounded-lg opacity-60 hover:opacity-80'>ⓘ More Info</button>
      
    </div>
  )
}

export default VideoTitle
