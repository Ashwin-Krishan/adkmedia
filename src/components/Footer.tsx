"use client";

import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 flex flex-col md:flex-row items-center justify-between px-8">
      <p className="text-sm">
        © {new Date().getFullYear()} ADK Media. All rights reserved.
      </p>

      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#work" className="hover:underline">
          Work
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>

        {/* ✅ Only Instagram icon */}
        <a
          href="https://www.instagram.com/adkmedia_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Instagram size={20} />
        </a>
      </div>
    </footer>
  );
}
