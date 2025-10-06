import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="min-w-[180px] md:min-w-[200px] transform transition-transform duration-300 hover:scale-110 hover:z-10 cursor-pointer">
      <img
        className="rounded-md shadow-lg"
        src={IMG_CDN + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
