// src/Signup.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showTerms, setShowTerms] = useState(false);

  const toggleTerms = (e) => {
    e.preventDefault();
    setShowTerms(!showTerms);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        <p className="text-center text-sm text-gray-500 mt-1">
          Join us by filling in the information below
        </p>

        <form className="mt-6 space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start text-sm">
            <input type="checkbox" className="mt-1 h-4 w-4 text-blue-600" required />
            <label className="ml-2 text-gray-700">
              I agree to the{" "}
              <a href="#" onClick={toggleTerms} className="text-blue-600 underline">
                terms and conditions
              </a>
            </label>
          </div>

          {showTerms && (
            <div className="mt-2 rounded-md border border-gray-300 bg-gray-50 p-4 text-sm text-gray-700 max-h-60 overflow-auto">
              <h4 className="text-md font-semibold mb-2">Terms and Conditions</h4>
              <p>
                By signing up, you agree to abide by our platform policies, respect user privacy,
                and take responsibility for your account activity. Misuse may lead to suspension.
              </p>
            </div>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account? */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
