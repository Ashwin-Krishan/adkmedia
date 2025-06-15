"use client";

import React from "react";

// ✅ Removed unused Link

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-6 z-50 text-white">
      <ul className="flex space-x-8">
        <li>
          <a href="#work" className="hover:underline">
            Work
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
