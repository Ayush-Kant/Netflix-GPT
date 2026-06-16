import React from 'react';
import { useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';

const VideoBackground = () => {
  useTrailer();

  const trailer = useSelector(store => store.movies?.trailer);
  const trailerURL = trailer?.key;



  return (
    <div className="w-full aspect-video overflow-hidden ">
      <iframe
        className="w-full h-full scale-[1.3]"
        src={`https://www.youtube.com/embed/${trailerURL}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerURL}&rel=0`}
        title="Trailer"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;