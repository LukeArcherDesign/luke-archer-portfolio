import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-8 py-5 flex justify-between items-center border-b border-zinc-900">
      {/* Left Side: Logo & Links */}
      <div className="flex items-center gap-12">
        <img
          src="/Luke-archer-logo.png"
          alt="Luke Archer Logo"
          className="h-10 w-auto object-contain"
        />

        <ul className="flex gap-8 text-sm font-medium text-zinc-300">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-red-700 transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a9 9 0 0 0 0 18" />
                <path d="M12 3v18" />
                <path d="M21 12H3" />
                <path d="M17 8l4 4-4 4" />
              </svg>
              Overview
            </Link>
          </li>

          {/* Projects Dropdown Container */}
          <li className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 hover:text-red-700 transition-colors duration-300 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Projects
              {/* Dropdown Chevron Indicator - Rotates smoothly when menu opens */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-0.5 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-700" : "text-zinc-500"}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Expanded Dropdown Menu */}
            {isOpen && (
              /* Expanded width to w-64 so the descriptive content doesn't break onto awkward lines */
              <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 mt-2 w-64 bg-black border border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50">
                {/* Main Hub Link */}
                <Link
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-xs uppercase tracking-wider font-semibold text-zinc-400 bg-zinc-950 hover:bg-zinc-900 border-b border-zinc-900 transition-colors"
                >
                  All Projects View
                </Link>

                {/* Haven Falls Link */}
                <Link
                  to="/projects/haven-falls"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-zinc-900 border-b border-zinc-900/50 transition-colors"
                >
                  <div className="text-sm font-medium text-white">
                    Haven Falls
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    eCommerce Store
                  </div>
                </Link>

                {/* The After Party Link */}
                <Link
                  to="/projects/after-party"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-zinc-900 border-b border-zinc-900/50 transition-colors"
                >
                  <div className="text-sm font-medium text-white">
                    The After Party
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    Commercial Platform
                  </div>
                </Link>

                {/* Powerhouse Studios Link */}
                <Link
                  to="/projects/powerhouse-studios"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-zinc-900 transition-colors"
                >
                  <div className="text-sm font-medium text-white">
                    Powerhouse Studios
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">
                    Commercial Dual-site Ecosystem
                  </div>
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/ux-design"
              className="flex items-center gap-2 hover:text-red-700 transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="13.5" cy="6.5" r=".5" />
                <circle cx="17.5" cy="10.5" r=".5" />
                <circle cx="8.5" cy="7.5" r=".5" />
                <circle cx="6.5" cy="12.5" r=".5" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
              </svg>
              UX
            </Link>
          </li>
        </ul>
      </div>

      <a
        href="mailto:lukearcherdesigner@gmail.com"
        className="hidden md:block text-sm font-medium text-zinc-300 hover:text-red-700 transition-colors duration-300"
      >
        lukearcherdesigner@gmail.com
      </a>
    </nav>
  );
}

export default Navbar;
