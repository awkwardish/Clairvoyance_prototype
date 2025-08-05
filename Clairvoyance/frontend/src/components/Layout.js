// src/components/Layout.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dark-mode");
    if (stored === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <nav className="flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-800">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            &lt;Clairvoyance/&gt;
          </h1>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
            beta
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className={`hover:text-blue-600 ${
              router.pathname === "/" ? "font-semibold" : ""
            }`}
          >
            🏠 Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-blue-600 ${
              router.pathname === "/about" ? "font-semibold" : ""
            }`}
          >
            💭 About
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 bg-gray-200 hover:bg-blue-200 dark:bg-gray-700 rounded-full dark:hover:bg-blue-600"

          >
            {darkMode ? "🔆 Dark " : "🌛 Light "}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden py-2 bg-white text-center dark:bg-gray-800">
          <Link href="/" className="py-2 px-4 text-sm bg-blue-100 rounded-full hover:bg-blue-400 dark:hover:bg-blue-900 dark:bg-blue-700" onClick={() => setIsMenuOpen(false)}>
            🏠 Home
          </Link>
          <Link href="/about" className="py-2 px-4 text-sm bg-blue-100 rounded-full hover:bg-blue-400 dark:hover:bg-blue-500 dark:hover:bg-blue-900 dark:bg-blue-700" onClick={() => setIsMenuOpen(false)}>
            💭 About
          </Link>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsMenuOpen(false);
            }}
            className="py-2 px-4 text-sm bg-blue-100 rounded-full hover:bg-blue-400 dark:hover:bg-blue-500 dark:hover:bg-blue-900 dark:bg-blue-700"
          >
            {darkMode ? "🔆 Light" : "🌛 Dark"}
          </button>
        </div>
      )}

      <main className="py-10 px-6">{children}</main>
    </div>
  );
}
