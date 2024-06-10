import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="text-4xl text-gray-700 mb-3">Unauthorized !!!</h1>
      <Link
        to="/home"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Return to Homepage
      </Link>
    </div>
  );
};

export default Unauthorized;
