const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent flex flex-col justify-center pl-12 md:pl-24 text-white z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg max-w-2xl">
        {title}
      </h1>
      <p className="text-sm md:text-lg text-gray-200 max-w-xl mb-6 line-clamp-3">
        {overview}
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-opacity-80 transition duration-300">
          ▶ Play
        </button>
        <button className="bg-gray-600 bg-opacity-70 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-500 transition duration-300">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
