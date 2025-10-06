import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
import { BACKGROUND } from "../utils/constants"

const GptSearchPage = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <img
                className="h-full w-full object-cover"
                src={BACKGROUND}
                alt="Netflix Background"
            />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearchPage