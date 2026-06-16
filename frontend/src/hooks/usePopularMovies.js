import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies = async () => {
        
            const data = await fetch(`${API_BASE_URL}/popular`)
            const json = await data?.json();
            dispatch(addPopularMovies(json?.results))
    }
    useEffect(()=>{
        popularMovies()
    },[])
    
}
export default usePopularMovies