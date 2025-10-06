import { FaSearch } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch,useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR, LOGO, LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          name: user.displayName
        }))
        navigate("/browse")
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, [])
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch)
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between bg-gradient-to-b from-black to-transparent px-8 py-4 z-50">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-8">
        {/* Netflix Logo */}
        <img
          className="w-28 cursor-pointer"
          src={LOGO}
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
       {gptSearchView && <select className="bg-gray-600 bg-opacity-70 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-500 transition duration-300" onChange={handleLanguageChange}>
          {LANGUAGES.map((language) => (
            <option key={language.code} value={language.code}>{language.name}</option>
          ))}
        </select>}
        < button className="bg-gray-600 bg-opacity-70 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-500 transition duration-300" onClick={handleGptSearchClick} >{gptSearchView ? "Home Page" : "GPT Search"}</button>
        <FaSearch className="cursor-pointer hover:text-gray-300" />
        <img
          className="w-8 h-8 rounded-md cursor-pointer"
          src={AVATAR}
          alt="Profile"
        />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
