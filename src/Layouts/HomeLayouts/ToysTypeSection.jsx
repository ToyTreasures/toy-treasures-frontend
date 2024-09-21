import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const ToysTypeSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-row items-center text-white w-full lg:max-w-none lg:w-1/2 bg-[#ffc12c] rounded-2xl shadow-lg overflow-hidden transform scale-75 sm:scale-100 origin-top">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min.png"
              alt="Stuffed Animals"
              className="w-2/5 h-48 sm:h-48 object-contain"
            />
            <div className="p-3 sm:p-6 text-left flex flex-col justify-start items-start w-3/5">
              <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                Stuffed Animals
              </h3>
              <Link
                to="/shop"
                className="flex justify-center items-center bg-white text-[#111] text-base sm:text-sm h-10 w-2/5 rounded-full duration-300 hover:shadow-[0_8px_8px_-4px_rgba(17,17,17,0.2)] hover:transform hover:scale-105 transition-all ease-in-out mt-1"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center text-white w-full  lg:max-w-none lg:w-1/2 bg-[#fb416b] rounded-2xl shadow-lg overflow-hidden transform scale-75 sm:scale-100 origin-top">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png"
              alt="Wooden Toys"
              className="w-2/5 h-48 sm:h-48 object-contain"
            />
            <div className="p-3 sm:p-6 text-right flex flex-col justify-end items-end w-3/5">
              <h3 className="text-3xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                Wooden Toys
              </h3>
              <Link
                to="/shop"
                className="flex justify-center items-center bg-white text-[#111] text-base sm:text-sm h-10 w-2/5 rounded-full duration-300 hover:shadow-[0_8px_8px_-4px_rgba(17,17,17,0.2)] hover:transform hover:scale-105 transition-all ease-in-out mt-1"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ToysTypeSection;
