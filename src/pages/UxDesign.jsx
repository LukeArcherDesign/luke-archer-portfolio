import React, { useState } from "react";
import tapWireframe from "../assets/UX/TAP-Wireframe.png";

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
                The After Party
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

          {/* BLOCK 2: PROJECT PROTOTYPES */}
          <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950 transition-colors duration-300">
            <button
              onClick={() => toggleSection("prototypes")}
              className="w-full px-8 py-6 flex justify-between items-center bg-zinc-900/50 hover:bg-zinc-900 transition-colors text-left"
            >
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Project Prototypes: My Approach
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
                className={`text-[#a11d40] transition-transform duration-300 ${expandedSection === "prototypes" ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Collapsible Content Area */}
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expandedSection === "prototypes"
                  ? "max-h-[600px] border-t border-zinc-900"
                  : "max-h-0"
              }`}
            >
              <div className="p-8 space-y-6">
                <p className="text-zinc-300 leading-relaxed text-base">
                  When developing standalone applications, I build extensive UX
                  flows to establish structural balance early. Solidifying
                  component maps and structural architecture charts provides an
                  active visual map. This detailed workflow dictates both
                  backend database relationships and frontend asset logic,
                  ensuring the end-to-end interface runs smoothly, operates
                  cleanly, and remains entirely aligned with production goals.
                </p>

                {/* Updated Project Link Button to GitHub with Original Icon */}
                <div className="pt-2">
                  <a
                    href="https://github.com/LukeArcherDesign/haven-falls-ecommerce"
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
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.3441 19.4855 5.89437 19.8669 6.5 20.1242" />
                      <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
                      <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
                      <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
                      <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
                    </svg>
                    Haven Falls - GitHub
                  </a>
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
