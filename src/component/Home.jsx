import { ShoppingCartIcon, StopIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    // home container
    <div className=" w-auto mx-7 py-16 sm:w-3/4 sm:mx-auto flex flex-col lg:flex-row justify-between gap-14 lg:gap-5 items-center">
      {/* left side */}
      <div className="lg:w-1/2 w-full flex flex-col gap-7">
        <span className="bg-yellow-400 text-gray-700 font-medium text-sm uppercase px-4 rounded-xl w-max">
          On Sale!
        </span>
        <h1 className="xl:text-4xl text-3xl font-sans font-bold">
          A reader lives a <br className="hidden xl:flex" />
          thousand lives <span className="text-blue-400">before he dies</span>
        </h1>
        <p className="xl:text-lg text-base text-gray-700">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        {/* button area */}
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <Link
            to="/book"
            className="bg-blue-400 text-white flex px-5 py-3 items-center gap-2 rounded-md font-semibold transition-colors duration-500 hover:bg-blue-600"
          >
            <button>Visit Store</button>
            <ShoppingCartIcon className="w-5 h-5 text-white"></ShoppingCartIcon>
          </Link>
          <Link
            to="https://github.com/"
            className="font-semibold transition-colors duration-500 hover:text-blue-600"
          >
            <button> Learn More</button>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="max-w-md">
        <Lottie animationData={reader} loop={true}></Lottie>
      </div>
    </div>
  );
};
