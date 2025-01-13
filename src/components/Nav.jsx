import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from localStorage and parse it to a boolean
    const loginStatus = JSON.parse(localStorage.getItem('isLoggedIn') || 'false');
    console.log("loginStatus:", loginStatus);
    setIsLoggedIn(loginStatus);
  }, []);

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="h-26 w-screen flex items-center justify-around bg-transparent z-[3]">
      <div className="h-20 w-40 flex flex-col items-center justify-center">
        <p className="font-bold text-3xl font-serif capitalize text-white">SaintStream</p>
      </div>

      <ul className="h-20 w-[480px] flex items-center justify-around cursor-pointer text-white">
        <li>Home</li>
        <li>Discover</li>
        <li>Movie Release</li>
        <li>Forum</li>
        <li>Login</li>
      </ul>

    
      <div className="h-20 w-[360px] flex items-center justify-around">
        <div
          className={`h-8 w-48 rounded-md flex items-center justify-around ${
            active ? 'border border-gray-200' : ''
          }`}
        >
          <input
            className="h-6 w-40 font-sm indent-1 outline-none bg-transparent text-white"
            type="text"
            id="search"
          />
          <label
            htmlFor="search"
            onClick={() => setActive(!active)}
          >
            <i className="fa fa-search cursor-pointer text-white" aria-hidden="true"></i>
          </label>
        </div>

        {/* Conditional Rendering for Buttons */}
        {!isLoggedIn && (
          <>
            <button
              className="h-8 w-20 bg-transparent border border-white rounded cursor-pointer text-white"
              onClick={handleSignup}
            >
              Sign up
            </button>
            <button
              className="h-8 w-20 bg-green-600 text-white rounded cursor-pointer"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
