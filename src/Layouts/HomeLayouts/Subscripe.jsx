import React from "react";
import { IoIosSend } from "react-icons/io";

const Subscribe = () => {
  return (
    <section className="w-full py-8 px-4 md:py-12 md:px-6 flex flex-col justify-center items-center my-10 md:my-20">
      <div className="w-4/5 bg-white rounded-2xl shadow-sm py-8 px-6 lg:py-16 lg:px-12 flex flex-col lg:flex-row  justify-between items-center space-y-6 lg:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:flex-1 md:pr-4 space-y-4 md:space-y-0 md:space-x-6">
          <div className="bg-[--primary-color] rounded-full p-5">
            <IoIosSend className="text-white" size={32} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-semibold">Subscribe to our newsletter & </h4>
            <h4 className="text-xl md:text-2xl flex flex-wrap justify-center md:justify-start tracking-wider gap-2 font-semibold">
              get <span className="text-[--primary-color]">10% discount!</span>
            </h4>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:pl-4">
          <form className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0">
            <input
              type="email"
              className="w-full lg:flex-grow border border-gray-200 rounded-full py-3 px-5 lg:mr-4 focus:outline-none focus:ring-2 focus:ring-[--primary-color]"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="w-full lg:w-auto bg-[--primary-color] text-white py-3 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
