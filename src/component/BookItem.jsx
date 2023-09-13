import React from "react";
import { Link } from "react-router-dom";

export const BookItem = ({ book }) => {
  const { image, price, title, url, subtitle, isbn13 } = book;
  return (
    <Link  to={`/book/${isbn13}`} className="px-4 py-3 bg-white shadow-2xl hover:-translate-y-6 transition-all duration-500 relative">
      <img src={image} alt="image-book" />
      <div className="absolute top-0 left-0 w-full h-full p-5 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-500 text-gray-300 flex flex-col">
        <h2 className="font-bold text-lg mb-10">{title}</h2>
        <p>{subtitle.substring(0, 45)}...</p>
        <p className="mt-auto">price : {price}</p>
      </div>
    </Link>
  );
};
