import express from "express";
import axios from "axios";

const router = express.Router();

const options = {
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
    }
};

router.get("/now-playing", async (req, res) => {
    try {

        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            options
        );

        res.status(200).json(response.data);

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch movies"
        });
    }

});
router.get("/trailer/:movieId", async (req, res) => {
    try {
        const  { movieId } = req.params; 
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            options
        );

        res.status(200).json(response.data);

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch movies"
        });
    }

});

export default router;