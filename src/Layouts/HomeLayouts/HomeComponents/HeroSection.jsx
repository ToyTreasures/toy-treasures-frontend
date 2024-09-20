import React from "react";
import CoverImg from "../../../assets/HomeComponent/5baddd4835e113c6299a48f5_li-tzuni-507346-unsplash.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-no-repeat bg-[50%_94%] flex items-center justify-center "
      style={{ backgroundImage: `url(${CoverImg})` }}
    >
      <div className="flex flex-col justify-center items-center w-full max-w-[570px] p-[56px_48px] rounded-2xl bg-white  text-center gap-4 ">
        <p className=" text-sm text-[#a5c926] font-bold mb-5 leading-4">Say Hello to ToyStore!</p>
        <p className="mb-5 font-varela-round text-[40px] leading-[10px] font-normal text-center text-black">
          Free Ecommerce
        </p>
        <p className="mb-7 font-varela-round text-[40px] leading-[10px] font-normal text-center text-black">
          Template for Webflow
        </p>
        <button className="bg-[#a5c926] text-white rounded-3xl h-12 p-2 w-4/12 text-sm leading-6 font-bold text-center hover:shadow-[0_8px_8px_-4px_rgba(165,201,38,0.5)] hover:scale-105 transition-transform">
          Open Catalog
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
