import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen w-[95%] mx-auto">
      <FaceFrownIcon className=" w-40 h-40 text-orange-400" />
      <h1 className="text-7xl font-bold text-orange-400">{status || 404}</h1>
      <h1 className=" text-lg md:text-3xl font-bold text-amber-950">
        {error.message && error.message}
      </h1>
      <Link to="/" className="btn">
        Back to Home page
      </Link>
    </div>
  );
};

export default ErrorPage;
