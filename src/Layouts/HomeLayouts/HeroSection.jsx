import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import CoverImg from "../../assets/hero-bg.jpg";

const HeroSection = ({ toysTypeSectionRef }) => {
  const handleSmoothScroll = useCallback(
    (e) => {
      e.preventDefault();
      toysTypeSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
        <p className="text-sm text-[--primary-color] font-bold mb-3 sm:mb-5 leading-4">
          Say Hello to ToyzCity!
        </p>
        <h1 className="mb-3 sm:mb-5 font-varela-round text-[--secondary-color] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-black">
          Website for
          <br />
          used children's toys and baby gear{" "}
        </h1>
        <Link
          to="/shop"
          className="flex items-center justify-center bg-[--primary-color] text-white rounded-3xl h-12 p-2 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 text-sm leading-6 font-bold text-center hover:shadow-[0_8px_8px_-4px_rgba(165,201,38,0.5)] hover:scale-105 transition-transform"
          aria-label="Open Catalog"
        >
          Open Shop
        </Link>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
