import Header from "./Header"
import { useRef, useState } from "react"
import loginValidation from "../utils/validation"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const [isSignUp, setIsSignUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const handleButtonClick = () => {
        const error = loginValidation(emailRef.current.value, passwordRef.current.value)
        if (error !== null) {
            setErrorMessage(error)
        }
        setErrorMessage(null)
        if (isSignUp) {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                    // ..
                });
        }
    }
    const preventDefault = (e) => e.preventDefault()

    return (
        <div className="relative h-screen w-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className="h-full w-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
                    alt="Netflix Login"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Header */}
            <Header />

            {/* Login Form */}
            <form
                onSubmit={preventDefault}
                className="absolute top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-75 rounded-lg p-10 flex flex-col space-y-4 text-white"
            >
                <h1 className="text-3xl font-bold mb-4">{isSignUp ? "Sign Up" : "Sign In"}</h1>
                {isSignUp && <input
                    ref={nameRef}
                    type="text"
                    placeholder="Name"
                    className="p-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                />}

                <input
                    ref={emailRef}
                    type="email"
                    placeholder="Email or phone number"
                    className="p-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                />

                <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    className="p-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                />
                <p className="text-red-600">{errorMessage}</p>
                <button
                    type="submit" onClick={handleButtonClick}
                    className="bg-red-600 hover:bg-red-700 transition rounded py-3 font-semibold"
                >
                    {isSignUp ? "Sign Up" : "Sign In"}
                </button>

                <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-red-600" />
                        <span>Remember me</span>
                    </label>
                    <span className="cursor-pointer hover:underline">Need help?</span>
                </div>

                <div className="text-gray-400 text-sm mt-6">
                    New to Netflix?{" "}
                    <span onClick={() => setIsSignUp(!isSignUp)} className="text-white hover:underline cursor-pointer">
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </span>
                </div>
            </form>
        </div>
    )
}

export default Login
