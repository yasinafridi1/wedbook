import React from "react";
// import { Link } from 'react-router-dom';

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 100) {
      nav.classList.add("animateMenu");
    } else {
      nav.classList.remove("animateMenu");
    }
  });

  return (
    <nav className="nav fixed py-2 px-10 w-full flex justify-center items-center flex-col">
      <div className="w-full py-1 flex justify-between items-center">
        <div className="text-3xl font-bold text-secular text-primary">
          WedBook
        </div>
        <ul className="text-menu flex justify-between items-center">
          <li>
            <a
              href="/"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a
            href="/signin"
            className="text-primary text-md px-2 font-bold hover:text-gray-600 transition ease-in-out duration-500"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="bg-primary py-1 px-2 text-white text-md font-bold hover:text-gray-600 transition ease-in-out duration-500"
          >
            Sign up
          </a>
        </div>
        <input type="checkbox" id="openSidebarMenu" />
        <label
          htmlFor="openSidebarMenu"
          className="sidebarIconToggle pr-4 sm:hidden"
        >
          <div className="spinner top"></div>
          <div className="spinner middle"></div>
          <div className="spinner bottom"></div>
        </label>
        <ul className="sm:hidden menu-responsive d-none">
          <li className="py-4">
            <a
              to="/"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              Home
            </a>
          </li>
          <li className="py-4">
            <a
              to="/products"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              Products
            </a>
          </li>
          <li className="py-4">
            <a
              href="#about"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              About Us
            </a>
          </li>
          <li className="py-4">
            <a
              href="#contact"
              className="text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
