import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import { useSelector } from "react-redux"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (!movies) return null

  const mainMovie = movies[0]
  const { original_title, overview, id } = mainMovie

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <VideoBackground movieId={id} />

      {/* Title Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 bg-gradient-to-t from-black via-transparent to-black z-20">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  )
}

export default MainContainer
