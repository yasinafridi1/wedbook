import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { store } from "../../redux/store";

const Navbar = ({ directory }) => {
  const [auth, setAuth] = useState(false);
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add("animateMenu");
      } else {
        nav.classList.remove("animateMenu");
      }
    }
  });

  // useEffect(() => {
  //   setAuth(store.getState().userInfo.auth);
  //   console.log(auth);
  // }, [auth]);

  return (
    <nav className={`${directory === 'home' ? 'navHomeBg' : 'bg-primary'} nav fixed py-2 px-10 w-full flex justify-center items-center flex-col`}>
      <div className="w-full py-1 flex justify-between items-center">
        <div className={`${directory === 'home' ? 'text-primary' : 'text-menu'} text-3xl font-bold text-secular`}>
          WedBook
        </div>
        <ul className={`${directory === 'home' ? 'text-gray-500' : 'text-menu'} flex justify-between items-center`}>
          <li>
            <Link
              to="/"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="/#services"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              Services
            </a>
          </li>
          {
            auth ?
              <li>
                <Link
                  to="/orders"
                  className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
                >
                  Orders
                </Link>
              </li>
              : ''
          }


          <li>
            <a
              href="#about"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="pl-12 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-bold hover:text-pink-900 transition ease-in-out duration-500"
            >
              Contact
            </a>
          </li>
        </ul>

        {
          auth ? <div>
            <Link
              href="/signin"
              className={`${directory === 'home' ? '' : 'navHomeBg'} py-1 text-secular text-primary text-md px-2 hover:text-blue-800 transition ease-in-out duration-500`}
            >
              Logout
            </Link>
          </div>
            :
            <div>
              <Link
                to="/signin"
                className={`${directory === 'home' ? '' : 'navHomeBg'} py-1 text-primary text-md px-2 font-bold hover:text-gray-600 transition ease-in-out duration-500`}
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-primary py-1 px-2 text-white text-md font-bold hover:text-gray-600 transition ease-in-out duration-500"
              >
                Sign up
              </Link>
            </div>

        }

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
