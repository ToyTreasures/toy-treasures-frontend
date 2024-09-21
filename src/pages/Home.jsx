import React, { useRef } from "react";
import HeroSection from "../Layouts/HomeLayouts/HeroSection";
import StuffedAnimals from "../Layouts/HomeLayouts/StuffedAnimals";
import ToysTypeSection from "../Layouts/HomeLayouts/ToysTypeSection";
import WoodenToys from "../Layouts/HomeLayouts/WoodenToys";

const Home = () => {
  const toysTypeSectionRef = useRef(null);
  return (
    <div className="w-full bg-gray-100">
      <HeroSection toysTypeSectionRef={toysTypeSectionRef} />
      <ToysTypeSection ref={toysTypeSectionRef} />
      <StuffedAnimals />
      <WoodenToys />
    </div>
  );
};

export default Home;
