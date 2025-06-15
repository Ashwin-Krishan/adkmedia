"use client";

import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-[var(--background)] text-[var(--foreground)] border-t border-gray-300">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="https://instagram.com/adkmedia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500 transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} ADK Media. All rights reserved.
      </p>
    </footer>
  );
}
