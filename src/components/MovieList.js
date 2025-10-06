import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  if (!movies.length) return null;

  return (
    <div className="px-6 py-4">
      {/* Title */}
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-3">
        {title}
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="relative group">
        <div className="flex overflow-x-scroll scrollbar-hide space-x-4 scroll-smooth">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>

        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent pointer-events-none" />

        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default MovieList;
