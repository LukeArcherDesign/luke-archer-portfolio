import React, { useState } from "react";
import tapWireframe from "../assets/UX/TAP-Wireframe.png";
import stompedWireframe from "../assets/UX/Stomped-Wireframe.png"; // <-- Add your Figma screenshot here

function UxDesign() {
  const [expandedSection, setExpandedSection] = useState("after-party");

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className="py-24 px-6 min-h-screen bg-black pt-32">
      <div className="max-w-4xl mx-auto">
        {/* Page Title Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            User Experience Design
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            I approach engineering through a user-first lens, balancing
            intuitive workflows with strategic project objectives. By mapping
            interactive journeys in Figma and UX Pilot before writing a single
            line of code, I isolate architecture problems early. This
            blueprinting phase simplifies complex client feedback loops and
            guarantees that the resulting code delivers a fast, purposeful, and
            highly converting digital application.
          </p>
        </div>

        {/* Accordion Case Studies Stack */}
        <div className="space-y-6">
          {/* BLOCK 1: THE AFTER PARTY */}
          <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950 transition-colors duration-300">
            <button
              onClick={() => toggleSection("after-party")}
              className="w-full px-8 py-6 flex justify-between items-center bg-zinc-900/50 hover:bg-zinc-900 transition-colors text-left"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                The After Party (Commercial)
              </h2>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-[#a11d40] transition-transform duration-300 ${expandedSection === "after-party" ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Collapsible Content Area */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === "after-party"
                  ? "max-h-[800px] border-t border-zinc-900"
                  : "max-h-0"
              }`}
            >
              <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Description Column */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-zinc-300 leading-relaxed text-base">
                    Building this system required establishing a core
                    information hierarchy alongside the layout mechanics. By
                    validating structural wireframes prior to standard
                    engineering phases, I presented immediate interactive
                    workflows to stakeholders, finalizing real-time responsive
                    behaviors before production.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-base">
                    This detailed mapping optimized user pathways, removed
                    severe backend onboarding blockages for administrative
                    managers, and gave content creation units maximum focus
                    flexibility.
                  </p>

                  {/* Added Figma Link Button */}
                  <div className="pt-2">
                    <a
                      href="https://www.figma.com/design/FZBDtC6OR13rcdkdhGew1x/THE-AFTER-PARTY"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-[#8b1535] hover:bg-[#a11d40] text-white font-medium rounded-lg border border-white transition-colors duration-300 shadow-md"
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
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                      </svg>
                      The After Party - Figma Design
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center">
                    <img
                      src={tapWireframe}
                      alt="The After Party UX Wireframe Blueprint"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2: STOMPED! */}
          <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950 transition-colors duration-300">
            <button
              onClick={() => toggleSection("stomped")}
              className="w-full px-8 py-6 flex justify-between items-center bg-zinc-900/50 hover:bg-zinc-900 transition-colors text-left"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                STOMPED! - Extreme Sports App (Open Source)
              </h2>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-[#a11d40] transition-transform duration-300 ${expandedSection === "stomped" ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Collapsible Content Area */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === "stomped"
                  ? "max-h-[800px] border-t border-zinc-900"
                  : "max-h-0"
              }`}
            >
              <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Description Column */}
                <div className="md:col-span-7 space-y-4">
                  <p className="text-zinc-300 leading-relaxed text-base">
                    A comprehensive UI/UX design system and application
                    architecture built for a social skateboarding, BMX and other
                    extreme sports platform. This blueprint establishes
                    responsive parity across desktop and mobile interfaces,
                    alongside full Light and Dark mode environment themes.
                  </p>
                  <p className="text-zinc-300 leading-relaxed text-base">
                    By mapping the locked-in color palette directly to Tailwind
                    CSS utility tokens and engineering the component hierarchy
                    for WCAG AA/AAA accessibility compliance, this Figma
                    prototype serves as a direct, production-ready schematic for
                    the front-end React development phase.
                  </p>

                  {/* Figma Link Button */}
                  <div className="pt-2">
                    <a
                      href="https://www.figma.com/design/Kko8VPQWVe9KTjPyWqnWEj/Social-Media-C--Website-Design?node-id=2-1&t=DmugkuvHlpdaTraJ-1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-[#8b1535] hover:bg-[#a11d40] text-white font-medium rounded-lg border border-white transition-colors duration-300 shadow-md"
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
                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                      </svg>
                      STOMPED! - Figma Design
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center">
                    <img
                      src={stompedWireframe}
                      alt="STOMPED App UX Wireframe Blueprint"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UxDesign;
