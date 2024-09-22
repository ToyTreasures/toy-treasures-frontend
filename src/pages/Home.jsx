import { useRef } from "react";
import BusinessSection from "../Layouts/HomeLayouts/BusinessSection";
import HeroSection from "../Layouts/HomeLayouts/HeroSection";
import Story from "../Layouts/HomeLayouts/Story";
import StuffedAnimals from "../Layouts/HomeLayouts/StuffedAnimals";
import Subscripe from "../Layouts/HomeLayouts/Subscripe";
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
      <Story />
      <BusinessSection />
      <Subscripe />
    </div>
  );
};

export default Home;
