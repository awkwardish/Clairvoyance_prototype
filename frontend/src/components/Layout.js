// src/components/Layout.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

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
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          Clairvoyance
        </h1>
        <div className="space-x-4">
          <Link
            href="/"
            className={`hover:underline ${router.pathname === "/" ? "font-semibold" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:underline ${router.pathname === "/about" ? "font-semibold" : ""}`}
          >
            About
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <main className="py-10 px-6">{children}</main>
    </div>
  );
}
