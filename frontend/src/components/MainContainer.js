import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  return (
    <div className="relative">
     

  <div className="absolute inset-0 
  bg-gradient-to-r from-black via-black/60 to-transparent z-10">
  </div>

     <VideoTitle />    
    </div>
      
  )
}

export default MainContainer
