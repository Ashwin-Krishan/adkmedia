"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-center py-4 space-x-8 font-medium">
        <Link href="#about" className="hover:font-bold transition-all">About</Link>
        <Link href="#work" className="hover:font-bold transition-all">Work</Link>
        <Link href="#clients" className="hover:font-bold transition-all">Clients</Link>
        <Link href="#contact" className="hover:font-bold transition-all">Contact</Link>
      </nav>
    </header>
  );
}
