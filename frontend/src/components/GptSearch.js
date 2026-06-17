import React from 'react'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        
        <div className='absolute -z-10 w-full h-screen object-cover' >
            
        <img  
            src='https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg' 
            alt='bg-img'>
            </img>
            </div>
      <GptSearchBar/>
    </div>
  )
}

export default GptSearch
