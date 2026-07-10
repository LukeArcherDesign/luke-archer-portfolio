import React, { useState } from "react";
import afterPartyImg from "../assets/TAP-project-image.png";

// --- GALLERY IMAGE IMPORTS ---
import tap1 from "../assets/TAP-Portfolio-Gallery/TAP-Website-1.png";
import tap2 from "../assets/TAP-Portfolio-Gallery/TAP-Website-2.png";
import tap3 from "../assets/TAP-Portfolio-Gallery/TAP-Website-3.png";
import tap4 from "../assets/TAP-Portfolio-Gallery/TAP-Website-4.png";
import tap5 from "../assets/TAP-Portfolio-Gallery/TAP-Website-5.png";
import tap6 from "../assets/TAP-Portfolio-Gallery/TAP-Website-6.png";
import tap7 from "../assets/TAP-Portfolio-Gallery/TAP-Website-7.png";

function TheAfterParty() {
  const stack = ["React", "Tailwind", "Node.js", "Javascript", "Netlify"];
  const features = [
    "Podcast streaming integration",
    "Centralised marketing hub",
    "Blog & Newsletter CMS",
    "Conversion-focused UI/UX",
  ];

  // React state to track which layout is selected for full-screen view
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryImages = [tap1, tap2, tap3, tap4, tap5, tap6, tap7];

  return (
    <section className="py-24 px-6 min-h-screen bg-black pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
          <div>
            <h1 className="font-signature italic text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
              The After Party
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

          {/* Visit Site Button (Commercial Project) */}
          <a
            href="https://the-afterparty.org"
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
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit Live Site
          </a>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Left Column (Image) */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center">
              <img
                src={afterPartyImg}
                alt="The After Party Project"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column (Description) */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-zinc-300 leading-relaxed text-lg mb-4">
              As the Frontend & UX Lead for this project, I championed a
              design-first approach to establish a striking digital identity for
              The After Party. Beyond UI development, I architected the broader
              marketing strategy, ensuring the platform operated as a highly
              effective funnel rather than a static brochure.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The objective was to engineer a centralized hub that seamlessly
              aggregates content from multiple streaming services and social
              media channels. By integrating engaging blogs, frictionless
              newsletter sign-ups, and optimised call-to-actions, the website
              successfully converts casual listeners into dedicated subscribers
              and clients.
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
                The application relies on React to establish a robust,
                component-driven architecture. This modular approach guaranteed
                structural consistency across the application and allowed for
                rapid prototyping of complex UI elements. For styling, I
                integrated Tailwind CSS to ensure scalability and
                maintainability, providing a responsive utility-class system
                that eliminates bloated stylesheets.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                A lightweight Node.js layer handles backend routing and
                third-party API connections for the mailing list and streaming
                platforms. The entire ecosystem is deployed via Netlify,
                leveraging continuous integration and global CDN distribution
                for lightning-fast page loads and a flawless end-user
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Gallery Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Gallery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setSelectedImg(imgUrl)}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center cursor-pointer group hover:border-[#a11d40] transition-all duration-300"
              >
                <img
                  src={imgUrl}
                  alt={`The After Party interface view ${index + 1}`}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Overlay text shown on card hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 border border-white text-white text-xs font-medium rounded uppercase tracking-wider bg-black/40 backdrop-blur-sm">
                    Enlarge Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Full Screen Lightbox Modal popup */}
          {selectedImg && (
            <div
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Close modal view"
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
                  alt="Enlarged gallery view"
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

export default TheAfterParty;
