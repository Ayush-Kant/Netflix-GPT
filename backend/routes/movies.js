import express from "express";
import axios from "axios";

const router = express.Router();

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
  },
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
      message: "Failed to fetch movies",
    });
  }
});

router.get("/trailer/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch trailer",
    });
  }
});

/*
  Image Proxy Route
  Example:
  /movie?posterPath=/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg
*/
router.get("/movie", async (req, res) => {
  try {
    const { posterPath } = req.query;

    if (!posterPath) {
      return res.status(400).json({
        success: false,
        message: "posterPath is required",
      });
    }

    const imageResponse = await axios.get(
      `https://image.tmdb.org/t/p/w500${posterPath}`,
      {
        responseType: "stream",
      }
    );

    res.setHeader(
      "Content-Type",
      imageResponse.headers["content-type"]
    );

    imageResponse.data.pipe(res);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch poster",
    });
  }
});

export default router;