import React from "react";
import appStore from "../../images/Apple.png";
import playStore from "../../images/Play.png";

const Contactus = () => {
  return (
    <section id="contact" className="h-full w-full flex justify-between items-center pt-8">
      <div className="pl-16">
        <h1 className="mb-2 font-bold text-xl">Contact Us</h1>
        <div className="flex flex-between items-start w-full flex-wrap">
          <div className="">
            <a
              href="https://goo.gl/maps/UiPfgRzcfvRwqSfc6"
              className="flex justify-start items-center transition-all py-1 ease-in-out duration-500 hover:text-pink-600"
            >
              <i className="fa-solid fa-location-dot text-base"></i>
              <p className="font-semibold pt-2 pl-2 text-sm">
                Peshawer Pakistan
              </p>
            </a>
            <a
              href="tel:+923045760623"
              className=" mt-3 flex justify-start items-center transition-all py-1 ease-in-out duration-500 hover:text-pink-600"
            >
              <i className="fa-solid fa-phone text-base"></i>
              <p className="font-semibold pl-2 text-sm">+923045760623</p>
            </a>
            <a
              href="https://wa.me/+923139027087"
              className="mt-3 flex justify-start items-center transition-all py-1 ease-in-out duration-500 hover:text-pink-600"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <p className="font-semibold pl-2 text-sm">+923139027087</p>
            </a>
            <a
              href="mailto:tahmeedullah651@gmail.com"
              className="mt-3 flex justify-start py-1 mb-6 items-center transition-all ease-in-out duration-500 hover:text-pink-600"
            >
              <i className="fa-solid fa-envelope text-base"></i>
              <p className="font-semibold pl-2 text-sm">
                tahmeedullah651@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mb-2 font-bold text-xl">Follow us on</h1>
        <div className="w-72 xsm:w-1/2 sm:w-1/2 mt-5 lg:w-1/2">
          {/* <h1 className="font-bold text-xl">Follow Us</h1> */}
          <div className="mt-3 flex flex-between items-start w-full flex-col flex-wrap">
            <a
              href="https://www.facebook.com"
              className="px-2 pb-2 flex justify-center items-center"
            >
              <i className="fa-brands fa-square-facebook text-3xl transition-all ease-in-out duration-300 hover:text-blue-600"></i>
              <span className="ml-2 font-semibold">facebook</span>
            </a>
            <a
              href="https://www.instagram.com"
              className="px-2 pb-2 flex justify-center items-center"
            >
              <i className="fa-brands fa-square-instagram text-3xl transition-all ease-in-out duration-300 hover:text-pink-700"></i>
              <span className="ml-2 font-semibold">instagram</span>
            </a>
            <a
              href="https://www.twitter.com"
              className="px-2 pb-2 flex justify-center items-center"
            >
              <i className="fa-brands fa-square-twitter text-3xl transition-all ease-in-out duration-300 hover:text-blue-400"></i>
              <span className="ml-2 font-semibold">twitter</span>
            </a>
            <a
              href="https://www.youtube.com"
              className="px-2 pb-2 flex justify-center items-center"
            >
              <i className="fa-brands fa-square-youtube text-3xl transition-all ease-in-out duration-300 hover:text-red-800"></i>
              <span className="ml-2 font-semibold">Youtube</span>
            </a>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <h1 className="font-bold text-xl pr-16">Download Our Application</h1>
        {/* <div className="w-full xsm:w-1/2 sm:w-1/2 mt-5 lg:w-1/2"> */}
        <div className="mt-3 flex flex-between items-start w-full flex-col flex-wrap">
          <a href="https://www.apple.com/store">
            <img
              className="w-52 h-16 mb-2"
              src={appStore}
              alt="App store"
            />
          </a>
          <a href="https://play.google.com/store">
            <img
              className="w-52 h-16 mt-3"
              src={playStore}
              alt="Google play store"
            />
          </a>
        </div>
        {/* <div className="mt-3 flex flex-between items-start w-full flex-col flex-wrap">
          
        </div> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default Contactus;
