import { useDispatch } from "react-redux"
import { API_BASE_URL } from "../utils/constants"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    const topRatedMovies = async () => {
        const data = await fetch(`${API_BASE_URL}/top-rated`)
        const json = await data?.json();
        dispatch(addTopRatedMovies(json?.results))
    }
    useEffect(()=>{
        topRatedMovies()
    },[])
}
export default useTopRatedMovies;