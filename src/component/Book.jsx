import React from "react";
import { useLoaderData } from "react-router-dom";
import { BookItem } from "./BookItem";

export const Book = () => {
  const { books } = useLoaderData();
  return (
    <div className="w-full sm:w-3/4 sm:mx-auto sm:px-0 px-7 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-3 justify-items-center sm:justify-items-stretch">
      {books.map((book) => {
        return <BookItem book={book} key={book.isbn13} />;
      })}
    </div>
  );
};
