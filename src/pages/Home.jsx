import React, { useRef } from "react";
import HeroSection from "../Layouts/HomeLayouts/HomeComponents/HeroSection";
import ToysTypeSection from "../Layouts/HomeLayouts/HomeComponents/ToysTypeSection";

const Home = () => {
  const toysTypeSectionRef = useRef(null);
  return (
    <div className="w-full">
      <HeroSection toysTypeSectionRef={toysTypeSectionRef} />
      <ToysTypeSection ref={toysTypeSectionRef} />
    </div>
  );
};

export default Home;
