import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="backgroundImage"
        />
      </div>
      <form
        onSubmit=""
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        className="bg-black bg-opacity-80 rounded-lg w-3/12 absolute p-12 mt-36 mx-auto right-0 left-0 text-neutral-50 font-sans"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            style={{ backgroundColor: "rgba(128, 128, 128, 0.7)" }}
            className="rounded-lg pl-4 bg-transparent ml-auto my-4 py-4 m-2 w-full"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          style={{ backgroundColor: "rgba(128, 128, 128, 0.7)" }}
          className="rounded-lg pl-4 bg-transparent ml-auto my-4 py-4 m-2 w-full"
          type="text"
          placeholder="Email Address"
        />
        <input
          style={{ backgroundColor: "rgba(128, 128, 128, 0.7)" }}
          className="rounded-lg pl-4 bg-gray-700 ml-auto py-4 m-2 w-full"
          type="password"
          placeholder="Password"
        />
        <button className="font-semibold rounded-lg ml-auto p-4 m-4 bg-red-700 w-full py-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix? " : "Already registered "}
          <span
            className="font-semibold cursor-pointer "
            onClick={handleSignUp}
          >
            {isSignIn ? "Sign up now. " : "Please Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
