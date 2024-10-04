import { useRef } from "react";
import BusinessSection from "../Layouts/HomeLayouts/BusinessSection";
import HeroSection from "../Layouts/HomeLayouts/HeroSection";
import Story from "../Layouts/HomeLayouts/Story";
import StuffedAnimals from "../Layouts/HomeLayouts/StuffedAnimals";
import CategoriesSection from "../Layouts/HomeLayouts/CategoriesSection";
import WoodenToys from "../Layouts/HomeLayouts/WoodenToys";

const Home = () => {
  const categoriesSectionRef = useRef(null);
  return (
    <div className="w-full bg-gray-100">
      <HeroSection categoriesSectionRef={categoriesSectionRef} />
      <CategoriesSection ref={categoriesSectionRef} />
      <StuffedAnimals />
      <WoodenToys />
      <Story />
      <BusinessSection />
    </div>
  );
};

export default Home;
