import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-6 overflow-hidden">
      {/* Main Content Container */}
      <div className="flex flex-col items-center text-center max-w-3xl z-10 relative">
        {/* Logo (Thinner border) */}
        <img
          src="/Luke-archer-logo.png"
          alt="Luke Archer Logo"
          className="w-28 h-28 mb-6 rounded-full border-2 border-white object-contain p-4 bg-black"
        />

        {/* Name (Signature Font) */}
        <h1 className="font-signature text-7xl md:text-9xl tracking-wide text-white mb-6">
          Luke Archer
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10">
          Front-end software developer with a strong foundation in UI/UX design
          and a comprehensive understanding of back-end architecture. I build
          responsive, performance-driven applications using React, Vue, and
          Angular, supported by robust .NET Core and Node.js APIs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4 w-full md:w-auto">
          {/* Projects Button (Changed from <a> to <Link> and updated href to to="/projects") */}
          <Link
            to="/projects"
            className="w-full md:w-auto px-8 py-4 bg-[#700b27] hover:bg-[#9a0f35] text-white font-medium rounded-lg border border-white transition-colors duration-300 shadow-[0_0_20px_rgba(112,11,39,0.4)] text-center"
          >
            Click here to view my projects
          </Link>

          {/* CV Download Button (Added white border) */}
          <a
            href="/Luke-Archer-CV.pdf"
            download
            className="w-full md:w-auto px-6 py-3 bg-[#9a0f35] hover:bg-[#c21845] text-white text-sm font-medium rounded-lg border border-white transition-colors duration-300 flex items-center justify-center gap-2"
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download my CV
          </a>

          {/* Social Links (Added white border) */}
          <div className="flex gap-4 mt-4 w-full md:w-auto">
            {/* GitHub Button */}
            <a
              href="https://github.com/LukeArcherDesign"
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-[#380412] hover:bg-[#4a0719] rounded-lg border border-white text-white font-medium transition-colors duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/lukejarcher/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-[#380412] hover:bg-[#4a0719] rounded-lg border border-white text-white font-medium transition-colors duration-300"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
