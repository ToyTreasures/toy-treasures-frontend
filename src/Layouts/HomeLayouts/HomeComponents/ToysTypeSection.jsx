import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const ToysTypeSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="flex flex-col sm:flex-row items-center text-white w-full sm:w-1/2 bg-[#ffc12c] rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min.png"
              alt="Stuffed Animals"
              className="w-full sm:w-2/5 h-48 object-contain"
            />
            <div className="p-4 sm:p-6 text-center flex flex-col justify-start items-center sm:items-start w-full sm:w-3/5">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Stuffed Animals</h3>
              <Link
                to="/shop"
                className="flex justify-center items-center bg-white text-[#111] text-xs sm:text-sm h-10 w-1/2 min-w-[120px] rounded-full duration-300 hover:shadow-[0_8px_8px_-4px_rgba(17,17,17,0.2)] hover:transform hover:scale-105 transition-all ease-in-out"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center text-white w-full sm:w-1/2 bg-[#fb416b] rounded-2xl shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6 text-center flex flex-col justify-end items-center sm:items-end w-full sm:w-3/5">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Wooden Toys</h3>
              <div className="flex justify-center sm:justify-end w-full">
                <Link
                  to="/shop"
                  className="flex justify-center items-center bg-white text-[#111] text-xs sm:text-sm h-10 w-1/2 min-w-[120px] rounded-full duration-300 hover:shadow-[0_8px_8px_-4px_rgba(17,17,17,0.2)] hover:transform hover:scale-105 transition-all ease-in-out"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <img
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png"
              alt="Wooden Toys"
              className="w-full sm:w-2/5 h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default ToysTypeSection;
