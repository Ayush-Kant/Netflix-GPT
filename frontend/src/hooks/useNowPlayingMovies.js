import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_BASE_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const NowPlayingMovies = async () =>{
      const data = await fetch(`${API_BASE_URL}/api/movies/now-playing`)
      const json = await data.json();
      console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
    } 
  useEffect(()=>{
    NowPlayingMovies()
  },[]) 
}

export default useNowPlayingMovies
