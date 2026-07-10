import React from "react";
import {
  FaCode,
  FaPen,
  FaComputer,
  FaInstagram,
  FaCartShopping,
  FaGraduationCap,
} from "react-icons/fa6";

function Timeline() {
  const experiences = [
    {
      title: "UX and Frontend Lead",
      date: "2025 - Present",
      icon: FaCode,
      points: [
        "Built and deployed a full-scale website",
        "Integrated custom CMS for blog management",
        "Led UX strategy and implementation",
      ],
    },
    {
      title: "Marketing and Content Manager",
      date: "2025 - 2026",
      icon: FaPen,
      points: [
        "Recreated websites using WordPress and Elementor",
        "Led marketing campaign design",
        "Managed multi-channel social media",
      ],
    },
    {
      title: "Marketing and Digital Coordinator",
      date: "2024 - 2025",
      icon: FaComputer,
      points: [
        "Created marketing assets for print and digital",
        "Liaised with external design and web agencies",
        "Managed seasonal marketing campaigns",
      ],
    },
    {
      title: "Digital Marketer",
      date: "2021 - 2024",
      icon: FaInstagram,
      points: [
        "Analyzed user engagement metrics and web traffic datad company social media and analytics",
        "Led comprehensive visual rebranding and design system overhaul",
        "Designed responsive cross-platform visual layouts",
      ],
    },
    {
      title: "Marketing Manager",
      date: "2018 - 2020",
      icon: FaCartShopping,
      points: [
        "Managed e-commerce operations",
        "Oversaw stock and digital marketing strategy",
        "Streamlined sales processes",
      ],
    },
    {
      title: "Licentiate (LTCL)",
      date: "2014 - 2017",
      icon: FaGraduationCap,
      points: [
        "Completed Licentiate Degree",
        "Developed high-level communication skills",
        "Focused on performance and discipline",
      ],
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-white rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <h2 className="font-signature text-4xl text-white text-center mb-10 tracking-widest">
          About Luke Archer
        </h2>

        <blockquote className="text-lg md:text-xl text-zinc-300 italic text-center mb-12 max-w-2xl mx-auto">
          "From my very first line of code, I realized software development is
          the ultimate intersection of logic and design - the perfect toolkit
          for solving complex problems."
        </blockquote>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line: Adjusted 'top' to align perfectly with the first circle's center */}
          <div className="absolute left-4 md:left-1/2 top-5 bottom-0 w-0.5 bg-zinc-700"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-8 md:mb-10 flex justify-between items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Circle Icon - Centered vertically in the row */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#a11d40] rounded-full flex items-center justify-center -translate-x-1/2 text-white z-10">
                <exp.icon size={14} />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12"></div>

              {/* Card */}
              <div className="ml-14 md:ml-0 w-full md:w-5/12 bg-zinc-950 border-2 border-white/60 p-6 rounded-xl hover:border-[#a11d40] transition-colors duration-300">
                <h3 className="text-lg font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <span className="text-sm font-semibold text-[#a11d40] block mb-2">
                  {exp.date}
                </span>
                <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-0.5">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
