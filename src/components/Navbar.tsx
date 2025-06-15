"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-6 z-50 bg-[var(--background)] bg-opacity-80 backdrop-blur-md text-[var(--foreground)]">
      <ul className="flex space-x-8">
        <li>
          <a href="#about" className="transition font-normal hover:font-bold">
            About
          </a>
        </li>
        <li>
          <a href="#work" className="transition font-normal hover:font-bold">
            Work
          </a>
        </li>
        <li>
          <a href="#clients" className="transition font-normal hover:font-bold">
            Clients
          </a>
        </li>
        <li>
          <a href="#contact" className="transition font-normal hover:font-bold">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
