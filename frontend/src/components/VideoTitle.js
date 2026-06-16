import React from 'react'
import { useSelector } from 'react-redux'

const VideoTitle = () => {
  const mainVideo = useSelector(store => store.movies?.nowPlayingMovies?.[0]);

  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end pb-48 px-14
                    bg-gradient-to-r from-black/80 via-black/20 to-transparent">
      <h1 className="text-6xl font-extrabold text-white mb-3 [text-shadow:0_4px_12px_rgba(0,0,0,0.9)] max-w-lg leading-tight">
        {mainVideo?.title}
      </h1>
      <p className="text-base text-gray-200 max-w-md mb-6 line-clamp-3 [text-shadow:0_4px_12px_rgba(0,0,0,0.9)]">
        {mainVideo?.overview}
      </p>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-white text-black font-bold
                           px-8 py-3 rounded-md text-lg hover:bg-white/60 transition">
          ▶︎ Play
        </button>
        <button className="flex items-center gap-2 bg-white/25 text-white font-semibold
                           px-8 py-3 rounded-md text-lg backdrop-blur-sm hover:bg-white/15 transition">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle
