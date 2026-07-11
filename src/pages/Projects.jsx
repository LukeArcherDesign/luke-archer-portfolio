import React from "react";
import { Link } from "react-router-dom"; // 1. Imported Link component
import havenFallsImg from "../assets/HF-project-image.png";
import afterPartyImg from "../assets/TAP-project-image.png";
import powerhouseImg from "../assets/Powerhouse-project-image.png";

function Projects() {
  const projects = [
    {
      title: "Haven Falls",
      desc: "A custom-built eCommerce platform for outdoor apparel, featuring a high-performance MongoDB backend for advanced filtering, product search, and streamlined order management.",
      type: "Open Source",
      stack: ["MongoDB", "Express", "React", "Node.js"],
      link: "/projects/haven-falls",
      image: havenFallsImg,
    },
    {
      title: "The After Party",
      desc: "A comprehensive digital brand identity for a weekly podcast, engineered with custom Elementor workflows to provide a seamless user experience and engaging content delivery.",
      type: "Commercial",
      stack: ["React", "Tailwind", "Node.js", "Javascript", "Netlify"],
      link: "/projects/after-party",
      image: afterPartyImg,
    },
    {
      title: "Powerhouse Studios",
      desc: "A bespoke platform for a music studio, featuring a complete visual rebrand and an architecture focused on conversion-driven UI/UX design.",
      type: "Commercial",
      stack: ["Wordpress", "Elementor", "Custom CSS"],
      link: "/projects/powerhouse-studios",
      image: powerhouseImg,
    },
  ];

  return (
    <section className="py-24 px-6 min-h-screen bg-black pt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6 tracking-tight">
          Software Development Projects
        </h2>
        <p className="text-lg text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Explore my projects below, including professional and personal work,
          demonstrating my technical stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#a11d40] transition-colors duration-300"
            >
              {project.image ? (
                <div className="w-full aspect-[4/3] overflow-hidden border-b border-zinc-800 bg-zinc-900 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[4/3] bg-zinc-800 flex items-center justify-center text-zinc-600 italic">
                  Project Image
                </div>
              )}

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded border ${project.type === "Commercial" ? "border-white text-white" : "bg-[#a11d40] text-white border-transparent"}`}
                  >
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 border-2 border-[#a11d40] rounded-full text-[10px] text-white hover:bg-[#a11d40] transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-400 text-sm mb-6">{project.desc}</p>

                {/* 2. Swapped <a> for <Link> and changed 'href' to 'to' */}
                <Link
                  to={project.link}
                  className="block w-full text-center py-3 bg-[#8b1535] border border-white text-white font-medium rounded hover:bg-[#a11d40] transition-colors"
                >
                  &lt;&gt; View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
