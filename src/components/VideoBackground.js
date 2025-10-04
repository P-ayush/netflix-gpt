import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {
    const trailer = useSelector((store) => store.movies?.trailerVideo)
    useMovieTrailer(movieId)
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {trailer?.key && (
                <iframe
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&vq=hd1080`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        </div>
    )
}

export default VideoBackground