import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getVideo = async () => {
      if (!movieId) return;
      const fetchVideos = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await fetchVideos.json();
      const filteredData = data.results.filter((video) => video.type === "Trailer");
      const trailer = filteredData.length ? filteredData[0] : data.results[0];
      dispatch(addTrailerVideo(trailer));
    };

    getVideo();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
