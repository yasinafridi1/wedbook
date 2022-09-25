import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav fixed top-0 w-full flex justify-center items-center flex-col' >
            <div className='w-full flex justify-between items-center py-2'>
                <div className='flex justify-between items-center w-1/3 ml-10 flex-col md:flex-row'>
                    <a href='tel:+923045760623' className='mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-solid fa-phone text-xs xsm:text-base md:text-lg font-bold"></i>
                        <p className='pl-2 text-xs xsm:text-sm md:text-md lg:text-lg font-semibold'>+923045760623</p>
                    </a>
                    <a href='https://wa.me/+923045760623' className='mt-3 flex justify-start items-center transition-all ease-in-out duration-500 hover:text-pink-600'>
                        <i className="fa-brands fa-whatsapp text-xs xsm:text-base md:text-lg font-bold"></i>
                        <p className='pl-2 text-xs xsm:text-sm md:text-md lg:text-lg font-semibold'>+923045760623</p>
                    </a>
                </div>
                <div className='pr-2 xsm:pr-10'>
                    <div className=''>
                        <a href="https://www.facebook.com" className='pr-2'> <i className="fa-brands fa-square-facebook text-2xl transition-all ease-in-out duration-300 hover:text-blue-600"></i></a>
                        <a href="https://www.instagram.com" className='px-2'><i className="fa-brands fa-square-instagram text-2xl transition-all ease-in-out duration-300 hover:text-pink-700"></i></a>
                        <a href="https://www.twitter.com" className='px-2'>  <i className="fa-brands fa-square-twitter text-2xl transition-all ease-in-out duration-300 hover:text-blue-400"></i></a>
                    </div>
                </div>
            </div>
            <div className='w-full py-3 flex justify-between items-center'>
                <div className='flex flex-between pl-2 sm:pl-3 items-center w-2/3 sm:w-1/2'>
                    <div className='flex w-1/2 xsm:pl-4'>
                        <i className="fa-solid fa-bag-shopping px-2 text-2xl pl-6 text-pink-800" ></i>
                        <h2 className='text-base pt-1 xsm:text-xl font-bold text-pink-700'>Shoplify</h2>
                    </div>
                    <a to="/cart" className="w-1/2 flex justify-end xsm:mr-8 sm:mr-0">
                        <i className="fa-solid fa-cart-shopping text-2xl text-pink-800 hover:text-pink-600 transition ease-in-out duration-400"></i>
                        <p className='text-xs font-bold'>10</p>
                    </a>
                </div>
                <ul className=' hidden pr-1 xl:w-1/2 sm:flex sm:justify-evenly sm:w-1/2'>
                    <li><a to="/" className='pl-8 xl:text-xl lg:text-lg md:text-base sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Home</a></li>
                    <li><a to="/products" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Products</a></li>
                    <li> <a href="#about" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500'>About</a> </li>
                    <li> <a href="#contact" className='xl:text-xl lg:text-lg md:text-base sm:pl-5 sm:text-xs sm:font-semibold hover:text-pink-600 transition ease-in-out duration-500 mr-2 lg:mr-0'>Contact</a> </li>
                </ul>
                <input type="checkbox" id="openSidebarMenu" />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle pr-4 sm:hidden">
                    <div className="spinner top"></div>
                    <div className="spinner middle"></div>
                    <div className="spinner bottom"></div>
                </label>
                <ul className='sm:hidden menu-responsive d-none'>
                    <li className='py-4'><a to="/" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Home</a></li>
                    <li className='py-4'><a to="/products" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Products</a></li>
                    <li className='py-4'><a href="#about" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>About Us</a></li>
                    <li className='py-4'><a href="#contact" className='text-2xl px-10 font-semibold hover:text-pink-600 transition ease-in-out duration-500'>Contact Us</a></li>
                </ul>
            </div>
        </nav >
    );
}

export default Navbar;
