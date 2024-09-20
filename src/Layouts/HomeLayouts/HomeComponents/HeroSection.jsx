import React, { useCallback } from "react";
import CoverImg from "../../../assets/HomeComponent/5baddd4835e113c6299a48f5_li-tzuni-507346-unsplash.jpg";

const HeroSection = ({ toysTypeSectionRef }) => {
  const handleSmoothScroll = useCallback(
    (e) => {
      e.preventDefault();
      toysTypeSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [toysTypeSectionRef]
  );

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center py-10 px-4 sm:px-6 mb-20"
      style={{ backgroundImage: `url(${CoverImg})` }}
      aria-label="Hero section"
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[570px] p-6 sm:p-8 md:p-12 rounded-2xl bg-white text-center gap-4">
        <p className="text-sm text-[#a5c926] font-bold mb-3 sm:mb-5 leading-4">
          Say Hello to ToyStore!
        </p>
        <h1 className="mb-3 sm:mb-5 font-varela-round text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-black">
          Free Ecommerce
          <br />
          Template for Webflow
        </h1>
        <button
          className="bg-[#a5c926] text-white rounded-3xl h-12 p-2 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 text-sm leading-6 font-bold text-center hover:shadow-[0_8px_8px_-4px_rgba(165,201,38,0.5)] hover:scale-105 transition-transform"
          aria-label="Open Catalog"
        >
          Open Catalog
        </button>
      </div>
      <div className="absolute -bottom-[30px] left-0 right-0 flex justify-center">
        <button
          onClick={handleSmoothScroll}
          className="hidden lg:flex w-16 h-16 bg-white rounded-full shadow-md items-center justify-center"
          aria-label="Scroll to toy types"
        >
          <div className="w-6 h-9 border-2 border-gray-400 rounded-full relative flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-400 rounded-full animate-scroll-down" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
