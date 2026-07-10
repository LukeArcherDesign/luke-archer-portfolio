import React, { useState } from "react";
import powerhouseImg from "../assets/Powerhouse-project-image.png";

// --- IMAGE IMPORTS ---
import ph1 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-1.png";
import ph2 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-2.png";
import ph3 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-3.png";
import ph4 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-4.png";
import ph5 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-5.png";
import ph6 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-6.png";
import ph7 from "../assets/PH-Portfolio-Gallery/Powerhouse-Website-7.png";

import ss1 from "../assets/PH-Portfolio-Gallery/Starstruck-Website-1.png";
import ss2 from "../assets/PH-Portfolio-Gallery/Starstruck-Website-2.png";
import ss3 from "../assets/PH-Portfolio-Gallery/Starstruck-Website-3.png";
import ss4 from "../assets/PH-Portfolio-Gallery/Starstruck-Website-4.png";
import ss5 from "../assets/PH-Portfolio-Gallery/Starstruck-Website-5.png";
import ss6 from "../assets/PH-Portfolio-Gallery/Starstruck-Website-6.png";

function PowerhouseStudios() {
  const stack = ["WordPress", "Elementor", "Custom CSS", "SEO"];
  const features = [
    "Dual-site architecture",
    "Custom CSS integrations",
    "Technical & On-page SEO",
    "Conversion-optimized UI",
  ];

  // React state to keep track of which gallery sub-tab is currently active
  const [activeTab, setActiveTab] = useState("powerhouse");
  const [selectedImg, setSelectedImg] = useState(null);

  const powerhouseImages = [ph1, ph2, ph3, ph4, ph5, ph6, ph7];
  const starstruckImages = [ss1, ss2, ss3, ss4, ss5, ss6];

  // Choose which array to map over depending on active state
  const currentImages =
    activeTab === "powerhouse" ? powerhouseImages : starstruckImages;

  return (
    <section className="py-24 px-6 min-h-screen bg-black pt-32">
      <div className="max-w-6xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
          <div>
            <h1 className="font-signature italic text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
              Powerhouse Studios
            </h1>
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

          <a
            href="https://powerhouse-studios.co.uk"
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
          <div className="md:col-span-4 flex flex-col justify-center">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center">
              <img
                src={powerhouseImg}
                alt="Powerhouse Project"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-center">
            <p className="text-zinc-300 leading-relaxed text-lg mb-4">
              This project involved architecting a cohesive dual-site ecosystem
              for Powerhouse Studios and its consumer-facing subsidiary,
              Starstruck Studio Experiences. The objective was to create two
              distinct digital identities under one technical umbrella, catering
              to both professional music production clients and event bookers.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              Rather than relying on rigid, pre-built themes, both platforms
              were engineered from the ground up. The overarching design
              strategy heavily prioritized a conversion-driven UI/UX, ensuring
              that users experienced a frictionless, intuitive journey from the
              initial landing page all the way to securing a booking.
            </p>
          </div>
        </div>

        {/* Grey Tech Box */}
        <div className="bg-zinc-900 border border-white rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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

            <div className="hidden md:block md:col-span-1 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-700 -translate-x-1/2"></div>
            </div>

            <div className="md:col-span-7">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
                Technical Overview
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The foundation of both sites utilizes WordPress and Elementor.
                However, to bypass the performance limitations and visual bloat
                of standard page builders, I implemented extensive Custom CSS.
                This approach allowed for precise control over responsive grid
                layouts, complex hover states, and brand-specific
                micro-interactions that standard themes cannot provide.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                A major technical focus was placed on structural performance and
                search engine optimization. By optimizing asset delivery,
                ensuring clean DOM architecture, and implementing strong on-page
                technical SEO, the ecosystem is built to rank highly for
                competitive local search terms while maintaining fast load
                times.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Section with Tab switching & Lightbox Modal */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            Gallery
          </h3>

          {/* Sub-brand Tab Toggles */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("powerhouse")}
              className={`px-6 py-2.5 text-base font-semibold rounded-full border transition-all duration-300 ${
                activeTab === "powerhouse"
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              Powerhouse Studios
            </button>
            <button
              onClick={() => setActiveTab("starstruck")}
              className={`px-6 py-2.5 text-base font-semibold rounded-full border transition-all duration-300 ${
                activeTab === "starstruck"
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:text-white"
              }`}
            >
              Starstruck Experiences
            </button>
          </div>

          {/* Dynamic 4:3 Aspect Grid with Hover Overlays */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentImages.map((imgUrl, index) => (
              <div
                key={index}
                /* Clicking any card saves its URL into state, opening the modal */
                onClick={() => setSelectedImg(imgUrl)}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center cursor-pointer group hover:border-[#a11d40] transition-all duration-300"
              >
                <img
                  src={imgUrl}
                  alt={`Gallery screenshot ${index + 1}`}
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Hover Overlay Container */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 border border-white text-white text-xs font-medium rounded uppercase tracking-wider bg-black/40 backdrop-blur-sm">
                    Enlarge Image
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal (Only renders when an image is selected) */}
          {selectedImg && (
            <div
              /* Clicking the black background closes the modal */
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Close image layout"
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

              {/* High-Res Projected Modal Image */}
              <div
                onClick={(e) =>
                  e.stopPropagation()
                } /* Stops click on the image from closing the background */
                className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              >
                <img
                  src={selectedImg}
                  alt="Enlarged screenshot view"
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

export default PowerhouseStudios;
