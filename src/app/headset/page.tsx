"use client";

import Link from "next/link";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black to-purple-700 flex flex-col items-start p-6">
      {/* Main Content Area */}
      <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-center p-10 flex flex-col md:flex-row justify-between items-center gap-">
         <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" height={100} width={100} />
          </Link>

          {/* Left Side: Heading */}
          <div className="text-left">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-purple-300">TechnoBitz</span>
            </h1>
            <p className="text-purple-100 text-lg">
              Empowering your tech journey.
            </p>
          </div>
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
              <Link href="/keyboard">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                  Keyboard
                </button>
              </Link>

              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                Headset
              </button>

              <Link href="/mouse">
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-100">
                  Mouse
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
 {/* Product Showcase */}
      <section>
        <h2 className="text-white text-2xl font-semibold mb-4">Headset</h2>
        <div className="flex flex-wrap gap-6">
          {/* Product Card */}
          {[
            {
              src: "/headset-dell-wh3024-bk-gallery-2_1024x.webp",
              alt: "Dell WH 3042 BK",
              name: "Dell WH 3024 BK",
            },
            {
              src: "/h390-frontview-gallery-black.webp",
              alt: "Logitech H390",
              name: "Logitech H390",
            },
            {
              src: "/hs-a4-bh300-w-1.png",
              alt: "A4Tech BH 300 W",
              name: "A4Tech BH 300 W",
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={300}
                height={300}
                className="rounded-lg mb-2"
              />
              <p className="text-white font-medium">{product.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
