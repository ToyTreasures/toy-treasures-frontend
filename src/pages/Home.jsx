import { useRef } from "react";
import BusinessSection from "../Layouts/HomeLayouts/BusinessSection";
import HeroSection from "../Layouts/HomeLayouts/HeroSection";
import Story from "../Layouts/HomeLayouts/Story";
import CategoriesSection from "../Layouts/HomeLayouts/CategoriesSection";

const Home = () => {
  const categoriesSectionRef = useRef(null);
  return (
    <div className="w-full bg-gray-100">
      <HeroSection categoriesSectionRef={categoriesSectionRef} />
      <CategoriesSection ref={categoriesSectionRef} />
      <Story />
      <BusinessSection />
    </div>
  );
};

export default Home;
