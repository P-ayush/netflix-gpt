import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const API_URL = "https://api.themoviedb.org/3/movie/popular?page=1";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const res = await fetch(API_URL, API_OPTIONS);
                const data = await res.json();

                console.log("TMDB data:", data);

                if (data?.results?.length > 0) {
                    dispatch(addPopularMovies(data.results));
                } else {
                    console.warn("No now playing movies found in API response");
                }
            } catch (err) {
                console.error("Error fetching now playing movies:", err);
            }
        };

        fetchNowPlaying();
    }, [dispatch]);
};

export default usePopularMovies;
