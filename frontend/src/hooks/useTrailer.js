import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../utils/constants";
import {  addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailer = () => {
    const dispatch = useDispatch()
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    const mainMovie = movies?.[0];
    const movieId = mainMovie?.id;
    console.log(movieId)
    const getTrailer = async () =>{
        if(!movieId) return;
      const data = await fetch(`${API_BASE_URL}/trailer/${movieId}`)
      const json = await data.json();
      console.log(json.results)
            const trailer =
            json.results?.find(
                video =>
                video.type === "Trailer" &&
                video.site === "YouTube"
            ) || json?.results[0];

            dispatch(addTrailer(trailer));
                } 
  useEffect(()=>{
    getTrailer()
  },[movieId]) 
}

export default useTrailer;

