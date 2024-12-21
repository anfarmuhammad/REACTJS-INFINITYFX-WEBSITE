import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomepage = location.pathname === "/";
  const isCollectionpage = location.pathname === "/collections";
  const isStandardpage = location.pathname === "/standard";
  const isAboutpage = location.pathname === "/about";
  const isSigninpage = location.pathname === "/signin";

  return (
    <nav className="w-full h-20 bg-gray-950 flex items-center text-white justify-between fixed px-4 z-50">
      <img className="w-[120px] h-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNwvNRVv82xE3UEOcp725fS1e8f2NdFZfA3I8nsOpJ4qRqBtF5"
        alt="Logo" />
      <div className="md:hidden flex items-center">
        <button className="text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>
      <ul className="hidden md:flex gap-8 items-center">
        <li><Link to="/" className={`${isHomepage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`} >Home</Link></li>
        <li><Link to="/collections" className={`${isCollectionpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`}>Collections</Link></li>
        <li><Link to="/standard" className={`${isStandardpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`}>Standard</Link></li>
        <li><Link to="/about" className={`${isAboutpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`}>About</Link></li>
        <li><Link to="/signin" className={`${isSigninpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`}>Sign in</Link></li>
      </ul>
      <button className="hidden md:block w-[80px] h-[40px] bg-sky-500 rounded-md text-white hover:bg-sky-600">
        Cart
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-950 text-white flex flex-col items-center gap-4 py-4 md:hidden">
          <Link to="/" className={`${isHomepage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/collections" className={`${isCollectionpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`} onClick={() => setIsOpen(false)}>Collections</Link>
          <Link to="/standard" className={`${isStandardpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`} onClick={() => setIsOpen(false)}>Standard</Link>
          <Link to="/about" className={`${isAboutpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`}onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/signin" className={`${isSigninpage ? "text-sky-500" : "text-gray-300"} hover:text-sky-500`}onClick={() => setIsOpen(false)}>Sign in</Link>
          <button className="w-[80px] h-[40px] bg-sky-500 rounded-md text-white hover:bg-sky-600">
            Cart
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
