import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export const Header = () => {
  //  toggle nav bar
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100 w-auto  px-7 py-5 flex justify-between items-center sm:w-3/4 sm:mx-auto relative">
      <div>
        <Link to="/" className="flex items-center">
          <BoltIcon className="w-7 h-7 text-blue-500"></BoltIcon>
          <span className=" font-bold text-2xl ml-2  tracking-wide">
            nextPage
          </span>
        </Link>
      </div>
      {/* for mobile  */}
      <Bars3BottomRightIcon
        className="w-8 h-8 inline-block cursor-pointer md:hidden"
        onClick={() => setOpen(true)}
      ></Bars3BottomRightIcon>
      {/* for large screen  */}
      <ul className="hidden md:flex gap-5 text-[18px] ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Book
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://github.com/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            About
          </NavLink>
        </li>
      </ul>
      {/* responsive nav for mobile  */}
      {open && (
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[90%] bg-white p-6 ">
          <div className="flex items-center justify-between">
            <Link to="/">
              <span className=" font-bold text-2xl tracking-wide">
                nextPage
              </span>
            </Link>
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => setOpen(false)}
            ></XMarkIcon>
          </div>
          <ul className="flex flex-col gap-3 text-[18px] mt-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://github.com/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
