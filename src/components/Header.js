import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between bg-gradient-to-b from-black to-transparent px-8 py-4 z-50">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-8">
        {/* Netflix Logo */}
        <img
          className="w-28 cursor-pointer"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />

        {/* Navigation Links */}
        <ul className="flex gap-6 text-white font-medium">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
          <li className="cursor-pointer hover:text-gray-300">Movies</li>
          <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
          <li className="cursor-pointer hover:text-gray-300">My List</li>
        </ul>
      </div>

      {/* Right: Search + Avatar */}
      <div className="flex items-center gap-6 text-white">
        <FaSearch className="cursor-pointer hover:text-gray-300" />
        <img
          className="w-8 h-8 rounded-md cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Header;
