import React from "react";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Timeline from "../components/Timeline";
import CoreSkills from "../components/CoreSkills";

function Overview() {
  return (
    <div id="overview" className="relative w-full">
      <div className="ambient-red-aura"></div>
      <div className="relative z-10">
        <Hero />
        <Technologies />
        <Timeline />
        <CoreSkills />
      </div>
    </div>
  );
}

export default Overview;
