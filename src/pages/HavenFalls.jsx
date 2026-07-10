import React, { useState } from "react";
import havenFallsImg from "../assets/HF-project-image.png";

// --- VIDEO & IMAGE IMPORTS ---
import projectVideo from "../assets/HF-Portfolio-Gallery/HF-project-walkthrough.mov";

import hf1 from "../assets/HF-Portfolio-Gallery/HF-Website-1.png";
import hf2 from "../assets/HF-Portfolio-Gallery/HF-Website-2.png";
import hf3 from "../assets/HF-Portfolio-Gallery/HF-Website-3.png";
import hf4 from "../assets/HF-Portfolio-Gallery/HF-Website-4.png";
import hf5 from "../assets/HF-Portfolio-Gallery/HF-Website-5.png";
import hf6 from "../assets/HF-Portfolio-Gallery/HF-Website-6.png";
import hf7 from "../assets/HF-Portfolio-Gallery/HF-Website-7.png";
import hf8 from "../assets/HF-Portfolio-Gallery/HF-Website-8.png";

function HavenFalls() {
  const stack = ["MongoDB", "Express", "React", "Node.js"];
  const features = [
    "Filtering and searching products",
    "Custom animated UI components",
    "Cart and wishlist",
    "Mobile responsive",
  ];

  // Tabs: 'video' or 'images'
  const [galleryMode, setGalleryMode] = useState("video");
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryImages = [hf1, hf2, hf3, hf4, hf5, hf6, hf7, hf8];

  return (
    <section className="py-24 px-6 min-h-screen bg-black pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
          <div>
            <h1 className="font-signature italic text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
              Haven Falls
            </h1>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
              {stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 border-2 border-[#a11d40] rounded-full text-xs text-white font-medium hover:bg-[#a11d40] transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#8b1535] hover:bg-[#a11d40] rounded-lg border border-white text-white font-medium transition-colors duration-300 shadow-lg"
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
            View on GitHub
          </a>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Left Column (Main Card Image) */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center">
              <img
                src={havenFallsImg}
                alt="Haven Falls Project Screenshot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column (Description) */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-zinc-300 leading-relaxed text-lg mb-4">
              Haven Falls is a bespoke, full-stack eCommerce platform designed
              to showcase a premium, outdoor-apparel market. Rather than relying
              on generic templates, I architected a custom UI system from the
              ground up, prioritizing brand cohesion, high-end aesthetics, and
              an immersive browsing experience.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The front-end places a heavy emphasis on responsive design and
              performance, ensuring high-resolution product imagery loads
              flawlessly across all devices. By integrating real-time cart state
              management and a frictionless checkout flow, the application
              bridges the gap between premium visual design and high-conversion
              functionality.
            </p>
          </div>
        </div>

        {/* Grey Tech Box */}
        <div className="bg-zinc-900 border border-white rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Features */}
            <div className="md:col-span-4">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                Features
              </h3>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#a11d40] flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vertical Divider line */}
            <div className="hidden md:block md:col-span-1 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-700 -translate-x-1/2"></div>
            </div>

            {/* Technical Overview */}
            <div className="md:col-span-7">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                Technical Overview
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Developed entirely on the MERN stack, the frontend is driven by
                React's component-based architecture. This modular approach
                allowed for highly reusable UI elements and complex state
                management, ensuring UI updates like cart additions or wishlist
                toggles happen instantaneously without page reloads.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                On the backend, a scalable Node.js and Express API handles
                business logic and routing. MongoDB was selected for its
                flexible document structure, powering rapid product queries,
                advanced filtering, and dynamic search capabilities. User
                security is enforced via JWT-based authentication, with session
                state securely maintained across visits.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Gallery/Walkthrough Showcase Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Gallery
          </h3>

          {/* Showcase Sub-Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setGalleryMode("video")}
              className={`px-6 py-2.5 text-base font-semibold rounded-full border transition-all duration-300 ${
                galleryMode === "video"
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              Video Tour
            </button>
            <button
              onClick={() => setGalleryMode("images")}
              className={`px-6 py-2.5 text-base font-semibold rounded-full border transition-all duration-300 ${
                galleryMode === "images"
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              Screenshots
            </button>
          </div>

          {/* Conditional Media Rendering */}
          {galleryMode === "video" ? (
            /* Video Container */
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <video
                src={projectVideo}
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            /* Image Grid Layout */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((imgUrl, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImg(imgUrl)}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center cursor-pointer group hover:border-[#a11d40] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Haven Falls screen capture ${index + 1}`}
                    className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 border border-white text-white text-xs font-medium rounded uppercase tracking-wider bg-black/40 backdrop-blur-sm">
                      Enlarge Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Full Screen Lightbox Popup Overlay */}
          {selectedImg && galleryMode === "images" && (
            <div
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Close image screen overlay"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              >
                <img
                  src={selectedImg}
                  alt="Enlarged screenshot viewport"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default HavenFalls;
