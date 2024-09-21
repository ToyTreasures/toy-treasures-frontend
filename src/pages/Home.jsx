import { useRef } from "react";
import HeroSection from "../Layouts/HomeLayouts/HeroSection";
import ToysTypeSection from "../Layouts/HomeLayouts/ToysTypeSection";

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
