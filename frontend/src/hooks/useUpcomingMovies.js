import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../utils/constants"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = async () => {
        const data = await fetch(`${API_BASE_URL}/upcoming`);
        const json = await data?.json();
        dispatch(addUpcomingMovies(json?.results))
    }
    useEffect(()=>{
        upcomingMovies()
    },[])
}
export default useUpcomingMovies;