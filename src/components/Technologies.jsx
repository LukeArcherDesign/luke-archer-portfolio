import React from "react";

function Technologies() {
  // We use the exact filenames you provided, ensuring we append .svg to all of them.
  // Make sure your filenames in 'public/assets/technologies/' match these strings exactly!

  const designSkills = [
    { name: "Figma", src: "/assets/technologies/figma-icon.svg" },
    { name: "Adobe XD", src: "/assets/technologies/adobe-xd-icon.svg" },
    {
      name: "Creative Cloud",
      src: "/assets/technologies/Adobe_Creative_Cloud_icon.svg",
    },
    {
      name: "Illustrator",
      src: "/assets/technologies/adobe-illustrator-icon.svg",
    },
    { name: "Photoshop", src: "/assets/technologies/adobe-photoshop-icon.svg" },
    {
      name: "InDesign",
      src: "/assets/technologies/adobe-indesign-cc-icon.svg",
    },
    { name: "Premiere Pro", src: "/assets/technologies/premiere-pro-cc.svg" },
    {
      name: "After Effects",
      src: "/assets/technologies/after-effects-icon.svg",
    },
    { name: "Canva", src: "/assets/technologies/canva-icon.svg" },
  ];

  const frontEndSkills = [
    { name: "React", src: "/assets/technologies/react-icon.svg" },
    { name: "Vue", src: "/assets/technologies/vue-icon.svg" },
    { name: "Angular", src: "/assets/technologies/angular-icon.svg" },
    { name: "JavaScript", src: "/assets/technologies/javascript-icon.svg" },
    { name: "TypeScript", src: "/assets/technologies/typescript-icon.svg" },
    { name: "Redux", src: "/assets/technologies/redux-icon.svg" },
    { name: "Next.js", src: "/assets/technologies/nextjs-icon.svg" },
    { name: "Bootstrap", src: "/assets/technologies/bootstrap-icon.svg" },
    { name: "Tailwind", src: "/assets/technologies/tailwind-icon.svg" },
    { name: "Storybook", src: "/assets/technologies/storybook-icon.svg" },
    { name: "Jest Testing", src: "/assets/technologies/jest-icon.svg" },
    { name: "Cypress Testing", src: "/assets/technologies/Cypress-icon.svg" },
  ];

  const backEndSkills = [
    { name: "C#", src: "/assets/technologies/CSharp-icon.svg" },
    { name: ".NET Core", src: "/assets/technologies/NET-core-icon.svg" },
    { name: "Node.js", src: "/assets/technologies/nodejs-icon.svg" },
    { name: "SQL", src: "/assets/technologies/sql-icon.svg" },
    { name: "MongoDB", src: "/assets/technologies/mongodb-icon.svg" },
    {
      name: "Analytics",
      src: "/assets/technologies/google-analytics-icon.svg",
    },
  ];

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 tracking-widest uppercase">
          Technologies
        </h2>

        <div className="bg-[#a11d40]/30 backdrop-blur-md border border-white rounded-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white shadow-[0_0_30px_rgba(112,11,39,0.2)]">
          {/* Column 1: Design */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wider">
              Design
            </h3>
            <ul className="grid grid-cols-3 gap-y-8 gap-x-2">
              {designSkills.map((skill, index) => (
                <li
                  key={index}
                  className="group relative flex flex-col items-center justify-center"
                >
                  {/* The Image */}
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />

                  {/* The Hover Tooltip */}
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-black border border-zinc-700 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Front End */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wider">
              Front End
            </h3>
            <ul className="grid grid-cols-3 gap-y-8 gap-x-2">
              {frontEndSkills.map((skill, index) => (
                <li
                  key={index}
                  className="group relative flex flex-col items-center justify-center"
                >
                  {/* The Image */}
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />

                  {/* The Hover Tooltip */}
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-black border border-zinc-700 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Backend */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-8 text-center uppercase tracking-wider">
              Backend
            </h3>
            <ul className="grid grid-cols-3 gap-y-8 gap-x-2">
              {backEndSkills.map((skill, index) => (
                <li
                  key={index}
                  className="group relative flex flex-col items-center justify-center"
                >
                  {/* The Image */}
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />

                  {/* The Hover Tooltip */}
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-black border border-zinc-700 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
