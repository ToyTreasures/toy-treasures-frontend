import React from "react";
import businessImage from "../../assets/business-img.jpeg";

const Business = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28 w-4/5 mx-auto">
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px] bg-transparent">
        <div className="flex flex-col items-center max-w-[600px] mb-20 px-4 text-center">
          <h2 className="text-3xl mb-4">Simple & Colorful Ecommerce</h2>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-start">
          <div className="w-full lg:w-1/2 px-4 order-first lg:order-last mb-8 lg:mb-0">
            <img
              src={businessImage}
              alt="business image"
              className="w-full h-auto md:h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 lg:pr-[8.33%]">
            <div className="flex flex-col items-start w-full px-4">
              <h2 className="text-3xl mb-4 tracking-wider text-black">Available for FREE!</h2>
              <div className="w-[70px] h-[2px] my-6 bg-[--primary-color]"></div>
              <p className="text-gray-600 mb-6">
                A successful marketing plan relies heavily on the pulling-power of advertising copy.
                Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
                convince consumers to take action. There is no magic formula to write perfect ad
                copy
              </p>
              <div className="w-full flex justify-center lg:justify-start ">
                <button className="w-full md:w-auto h-12 px-7 justify-center rounded-full bg-[--primary-color] text-white text-sm font-semibold transition-all duration-300 ease-in-out hover:transform hover:scale-105">
                  GET IT NOW!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
