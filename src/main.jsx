import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Book } from "./component/Book.jsx";
import { Home } from "./component/Home.jsx";
import { SingleBook } from "./component/SingleBook.jsx";
import ErrorPage from "./component/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "book",
        element: <Book />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:bookid",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.bookid}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
