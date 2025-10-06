import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo)
  useMovieTrailer(movieId)

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer?.key}`}
        title="Movie Trailer"
        allow="autoplay; fullscreen"
      />
    </div>
  )
}

export default VideoBackground
