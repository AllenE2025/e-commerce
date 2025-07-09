"use client";

import Link from "next/link";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-black to-purple-700 flex flex-col p-6 gap-10">
      {/* Header Section */}
      <header className="w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo + Branding */}
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TechnoBitz Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="text-left">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
              Welcome to <span className="text-purple-300">TechnoBitz</span>
            </h1>
            <p className="text-purple-100 text-lg">
              Empowering your tech journey.
            </p>
          </div>
        </div>

        {/* Auth & Cart Buttons */}
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
      </header>

      {/* Dropdown Menu */}
      <div className="relative">
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
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 cursor-pointer">
                  Keyboard
                </span>
              </Link>
              <Link href="/headset">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 cursor-pointer">
                  Headset
                </span>
              </Link>
              <Link href="/mouse">
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 cursor-pointer">
                  Mouse
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Product Showcase */}
      <section>
        <h2 className="text-white text-2xl font-semibold mb-4">Keyboards</h2>
        <div className="flex flex-wrap gap-6">
          {/* Product Card */}
          {[
            {
              src: "/pro-x-60-keyboard-black-gallery-1-us.webp",
              alt: "Logitech Pro X 60 Keyboard",
              name: "Logitech Pro X 60",
            },
            {
              src: "/RedragonK631Gery65_WiredRGBGamingKeyboard_2.webp",
              alt: "Redragon K631",
              name: "Redragon K631 Grey 65",
            },
            {
              src: "/RKROYALKLUDGEM7575_GasketMountWirelessGamingKeyboard_2.webp",
              alt: "Royal Kludge M7575",
              name: "Royal Kludge M7575",
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
