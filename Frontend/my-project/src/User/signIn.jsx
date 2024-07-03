import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom"; // Import Navigate

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    axios
      .post("http://localhost:8001/api/auth/login", {
        Email: email,
        Password: password,
      })
      .then((response) => {
        // Handle response
        console.log(response.data);
        setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      })
      .catch((error) => {
        console.error("Error signing in", error);
      });
  };

  if (isLoggedIn) {
    // Redirect to /Todo if logged in
    return <Navigate to="/Todo" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-black p-8 border border-gray-300 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-white">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Log In
          </button>
          <div className="mt-4 text-gray-300">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-400">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
