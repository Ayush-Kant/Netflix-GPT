import React from 'react';
import { useSelector } from 'react-redux';
import useTrailer from '../hooks/useTrailer';

const VideoBackground = () => {
  useTrailer();

  const trailer = useSelector(store => store.movies?.trailer);
  const trailerURL = trailer?.key;

  if (!trailerURL) return null;

  return (
    <div className="fixed inset-0 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2
                   w-screen h-screen
                   scale-150
                   -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube.com/embed/${trailerURL}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerURL}&rel=0`}
        title="Trailer"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;