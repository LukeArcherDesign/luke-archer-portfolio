import React from "react";

function CoreSkills() {
  const skills = [
    "Problem Solving",
    "Debugging",
    "Design",
    "User Interface Design",
    "Branding",
    "Colour Theory",
    "Accessibility",
    "User Testing",
    "Communication",
    "SEO",
    "Scalability",
    "Content Strategy",
    "Project Management",
    "Collaboration",
    "Continuous Development",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16 uppercase tracking-widest">
          Core Skills
        </h2>

        {/* Flex wrap allows the pills to flow naturally to the next line */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-2 border-2 border-[#a11d40] rounded-full text-white font-medium hover:bg-[#a11d40] transition-colors duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreSkills;
