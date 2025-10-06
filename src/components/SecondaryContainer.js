import MovieList from "./MovieList"
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

    return (
        <div className="relative bg-black -mt-32 z-30">
            <MovieList title="Now Playing" movies={movies?.nowPlayingMovies || []} />
            <MovieList title="Top Rated" movies={movies?.topRatedMovies || []} />
            <MovieList title="Upcoming" movies={movies?.upcomingMovies || []} />
            <MovieList title="Popular" movies={movies?.popularMovies || []} />
        </div>

    )
}

export default SecondaryContainer
