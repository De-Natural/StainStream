import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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
    <div className="h-26 w-screen flex items-center justify-around bg-transparent z-[3] relative">
      <div className="h-20 w-fit flex flex-col items-center justify-center">
        <p className="font-bold text-xl md:text-3xl font-serif capitalize text-white">SaintStream</p>
      </div>

        
        <nav
          className={`absolute top-full left-0 w-full h-[500px] sm:static sm:block md:w-fit md:h-fit md:left-80 
            transition-all duration-300 gap-5 sm:gap-10 bg-black/10 md:bg-transparent z-[9999]
            ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        >
        <ul className="h-full md:h-20 w-full md:w-[500px] flex flex-col sm:flex-row justify-evenly md:justify-center items-center cursor-pointer text-white gap-6 font-normal text-base md:text-xl">
          <li>Home</li>
          <li>Discover</li>
          <li>Movie Release</li>
          <li>Forum</li>
          <li>Login</li>
        </ul>
      </nav>

        {/*
        <BrandInfo />
        <nav className={`h-[500px] md:h-fit absolute w-full md:w-fit top-full left-0 sm:static sm:block gap-5 sm:gap-10 transition-all duration-300 bg-black/10 md:bg-transparent ${isNavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="h-full flex flex-col sm:flex-row justify-evenly md:justify-center items-center gap-6 font-medium text-base md:text-xl">
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming-events">Upcoming Events</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">Faqs</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </nav> */}
    
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

        <GiHamburgerMenu
          className="text-3xl text-white visible sm:hidden cursor-pointer"
          id="hamburger-menu"
          onClick={toggleNav}
        />

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
