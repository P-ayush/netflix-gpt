import {useSelector} from "react-redux";
import languageConstants from "../utils/languageConstants";
const GptSearchBar = () => {
    const language = useSelector((store) => store.config.lang)
    const preventDefault = (e) => e.preventDefault()
    return (
        <div className="flex justify-center items-start h-screen pt-48">
            <form className="flex w-full max-w-3xl" onSubmit={preventDefault}>
                <input
                    type="text"
                    placeholder={languageConstants[language].gptSearchPlaceHolder}
                    className="flex-1 px-6 py-4 text-2xl rounded-l-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                    type="submit"
                    className="px-8 py-4 text-2xl bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-colors"
                >
                    {languageConstants[language].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar
