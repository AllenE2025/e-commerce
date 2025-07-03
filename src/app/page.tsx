"use client";

import Link from "next/link";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black to-purple-700 flex flex-col items-start p-6">
      {/* Main Content Area */}
      <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-center p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Heading */}
        <div className="text-left">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-purple-300">TechnoBitz</span>
          </h1>
          <p className="text-purple-100 text-lg">
            Empowering your tech journey.
          </p>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button
            className="flex items-center gap-2 bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300 shadow"
            aria-label="View cart"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
          </button>

          <Link href="/login">
            <button className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300 shadow">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 shadow">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className="relative inline-block text-left mt-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-between items-center w-40 px-4 py-2 bg-white text-purple-700 font-medium rounded-md shadow hover:bg-purple-100 transition"
        >
          Products
          <ChevronDown className="ml-2 w-4 h-4" />
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black/10 z-50">
            <div className="py-1">
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                Keyboard
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                Headset
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                Mouse
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
