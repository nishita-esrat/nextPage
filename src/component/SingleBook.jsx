import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const SingleBook = () => {
  const singleBook = useLoaderData();
  const [fold, setFold] = useState(true);
  return (
    // single book container
    <div className="w-auto mx-7  sm:w-[80%] sm:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 border-2 p-5 my-10 ">
      {/* book image */}
      <img
        src={singleBook.image}
        alt="book-image"
        className="place-self-center w-full lg:h-full"
      />
      {/* book details */}
      <div className="flex flex-col gap-5 lg:pt-16">
        <span className="badge">BRAND NEW</span>
        <h2 className="text-3xl font-bold tracking-tighter">
          {singleBook.title}
        </h2>

        <div>
          <p>Authors:{singleBook.authors}</p>
          <p>Publisher:{singleBook.publisher}</p>
          <p>Year:{singleBook.year}</p>
          <p>Rating:{singleBook.rating}</p>
        </div>
        {/* folding area */}
        {fold ? (
          <p className="text-gray-600">
            {singleBook.desc.substring(0, 100)}...
            <span
              className="font-bold cursor-pointer text-blue-600"
              onClick={() => setFold(false)}
            >
              read more
            </span>
          </p>
        ) : (
          <p className="text-gray-600 ">
            {singleBook.desc}
            <span
              className="font-bold cursor-pointer text-blue-600"
              onClick={() => setFold(true)}
            >
              read less
            </span>
          </p>
        )}
        {/* buttom area */}
        <div className="flex items-center gap-5 ">
          <button className="btn">Buy Now</button>
          <p className="font-bold">price:{singleBook.price}</p>
        </div>
      </div>
    </div>
  );
};
