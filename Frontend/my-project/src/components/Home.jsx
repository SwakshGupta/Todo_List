import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-white text-4xl mb-8">Welcome to Todo</h1>
        <div className="space-x-4">
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg rounded">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 text-lg rounded">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
