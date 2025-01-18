import React, { useState, useRef } from 'react';
import { Header } from './Header';
import checkValidateData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(false);
  const [error, setError] = useState({ email: '', password: '' });  // Updated to store email and password errors separately
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignForm(!isSignForm);
  };
  const name = useRef("");
  const email = useRef("");  // Initialize ref with null
  const password = useRef("");  // Initialize ref with null
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (email.current && password.current) {
      const emailValue = email.current.value;
      const passwordValue = password.current.value;
      const message = checkValidateData(emailValue, passwordValue);  // Get validation messages for both fields
      setError(message);  // Update state with email and password errors

      if (message) {
        return;
      }

      // sign in or sign up logic
      if (isSignForm) {
        // Sign-up logic (creating new user)
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            // Handle further user actions (e.g., redirecting, setting user state, etc.)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({ email: errorMessage, password: errorCode });  // Update error state
            console.error('Error:', errorCode, errorMessage);
          });
      } else {
        // Sign-in logic (authentication)
        // Add sign-in logic here
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({ email: errorMessage, password: errorCode });
            console.error('Error:', errorCode, errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="background-img"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-[rgba(0,0,0,0.75)] rounded-md'>
        <h1 className='text-white font-bold text-3xl mb-5'>{!isSignForm ? "Sign In" : "Sign Up"}</h1>
        {isSignForm && (
          <input
            type="text"
            ref={name}
            placeholder="Name"
            className='p-4 my-3 w-full bg-[rgb(44,52,66)] opacity-100 border-white text-white rounded-md'
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or mobile number"
          className='p-4 my-3 w-full bg-[rgb(44,52,66)] opacity-100 border-white text-white rounded-md'
        />
        {error.email && <p className='text-red-500'>{error.email}</p>} {/* Display email error */}


        <input
          type="password"
          ref={password}
          placeholder="Password"
          className='p-4 my-3 w-full bg-[rgb(44,52,66)] opacity-100 border-white text-white rounded-md'
        />

        {error.password && <p className='text-red-500'>{error.password}</p>} {/* Display password error */}

        <button
          onClick={handleButtonClick}
          className='p-4 my-3 bg-[rgb(229,9,20)] opacity-100 w-full text-white rounded-md'
        >
          {isSignForm ? "Sign Up" : "Sign In"}
        </button>

        <span className='text-slate-400'>New to Netflix?</span>
        <span
          className='p-4 text-white cursor-pointer'
          onClick={toggleSignInForm}
        >
          {isSignForm ? "Sign In" : "Sign Up now"}
        </span>
      </form>
    </div>
  );
};
export default Login;