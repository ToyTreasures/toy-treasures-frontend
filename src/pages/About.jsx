/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
// import BackgroundImage from "../assets/story-bg.jpg";
import { IoIosPlay } from "react-icons/io";
import { IoIosSend } from "react-icons/io";

const About = () => {
  return (
    <div className="container  mx-auto w-4/5 p-4 lg:p-8">
      <div className="flex flex-col justify-center items-center max-w-screen-sm mx-auto sm:p-8 md:p-12 rounded-2xl bg-white text-center gap-4">
        <p className="text-sm text-[#a5c926]  mb-3 sm:mb-5 leading-4 font-semibold">
          All You Need is Fun!
        </p>
        <h2 className="mb-3 sm:mb-5 font-varela-round text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-black">
          Introducing ToyStore
        </h2>
        <p className="text-gray-500 mb-4">
          A successful marketing plan relies heavily on the pulling-power of
          advertising copy. Writing result-oriented ad copy is difficult, as it
          must appeal to, entice, and convince consumers to take action.
        </p>
        <a href="#" className="text-lime-500 underline hover:text-lime-600">
          More About Us
        </a>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8 mb-12">
        <figure className="lg:w-full">
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-1600.jpeg"
            alt="Toy Store"
            className="w-full rounded-xl"
          />
        </figure>
      </div>

      <div className="flex flex-col justify-center items-center max-w-screen-lg  mx-auto p-6 sm:p-8 md:p-12 rounded-2xl bg-white text-center gap-4">
        <p className="text-sm text-[#a5c926]  mb-3 sm:mb-5 leading-4 font-semibold">
          Made for Webflow
        </p>
        <h1 className="mb-3 sm:mb-5 font-varela-round text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-black">
          Simple & Colorful Ecommerce
          <br />
          Template for Your Business
        </h1>
      </div>

      <div className="space-y-12">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="card-body  max-w-screen-sm">
            <h1 className="card-title mb-3 lg:mb-5  sm:mb-5 font-varela-round text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-black">
              Beautifully Designed
            </h1>
            <div className="w-32 h-0.5 mt-4 bg-gray-200 relative">
              <div className="w-full h-full bg-lime-500 absolute top-0 left-0"></div>
            </div>
            <p className="text-gray-500 mb-5 lg:mb-7 text-base">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy.
            </p>
            <div className="card-actions flex items-center space-x-4 justify-start">
              <button className="btn bg-lime-500 hover:bg-lime-600 text-white rounded-full px-6 py-2">
                Get It for FREE!
              </button>
            </div>
          </div>
          <figure className="lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0">
            <img
              className="w-full max-w-md rounded-lg"
              src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
              alt="Wooden Camera"
            />
          </figure>
        </div>
        <div className="flex flex-col lg:flex-row items-center  lg:space-x-8">
          <figure className="lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0">
            <img
              className="w-full max-w-md rounded-lg"
              src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg"
              alt="Toy Product"
            />
          </figure>
          <div className="card-body max-w-screen-sm">
            <h1 className="card-title mb-3 sm:mb-5 font-varela-round text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-black">
              100% Responsive
            </h1>
            <div className="w-32 h-0.5 mt-4 bg-gray-200 relative">
              <div className="w-full h-full bg-lime-500 absolute top-0 left-0"></div>
            </div>
            <p className="text-gray-500 mb-5 lg:mb-7 text-base">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy.
            </p>
            <div className="flex justify-between items-center mb-8">
              <Link
                to="/shop"
                className="py-2 border-b-2 border-gray-300 transition-colors duration-300 ease-in-out text-gray-900 text-sm font-semibold no-underline hover:border-lime-500 flex items-center gap-1"
              >
                See All Toys
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section
        className="flex flex-col items-center justify-center py-28 px-6 my-20 bg-black bg-opacity-30 bg-blend-overlay bg-cover bg-center bg-no-repeat bg-fixed text-white"
        style={{
          // backgroundImage: `url(${BackgroundImage})`,
          backgroundImage: `urlhttps://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-1600.jpeg"
            alt="Toy Store)`,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-4xl">
          <div className="flex flex-col items-center text-center max-w-2xl mb-4">
            <h3 className="text-sm font-semibold mb-4 tracking-wider font-varela-round">
              About The Shop
            </h3>
            <h2 className="text-4xl font-varela-round mb-6">Watch Our Story</h2>
            <p className="text-lg font-varela-round">
              There is no magic formula to write perfect ad copy. It is based on
              a number of factors, including ad placement, demographic, even the
              consumer mood.
            </p>
          </div>
          <button className="flex items-center justify-center w-16 h-16  rounded-full bg-[--primary-color] transition-transform duration-300 ease-in-out transform hover:scale-110">
            <IoIosPlay className="ms-1" size={32} />
          </button>
        </div>
      </section>
      <section className="w-full py-8 px-4 md:py-12 md:px-6 flex flex-col justify-center items-center ">
        <div className="w-4/5 bg-white rounded-2xl shadow-sm py-8 px-6 lg:py-16 lg:px-12 flex flex-col lg:flex-row  justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:flex-1 md:pr-4 space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-[--primary-color] rounded-full p-5">
              <IoIosSend className="text-white" size={32} />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-varela-round">
                Subscribe to our newsletter{" "}
              </h4>
              <h4 className="text-xl md:text-2xl flex flex-wrap justify-center md:justify-start  gap-2 font-varela-round">
                &get{" "}
                <span className="text-[--primary-color] We're on Instagram!">
                  10% discount!
                </span>
              </h4>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:pl-4">
            <form className="flex flex-col  lg:flex-row items-center space-y-4 lg:space-y-0">
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
      <div className="flex flex-col justify-center items-center max-w-screen-xl  p-6 sm:p-8 md:p-12 rounded-2xl bg-white text-center gap-4">
        <p className="text-sm text-[#a5c926]  mb-1 sm:mb-3 leading-1 font-varela-round">
          @ElasticThemes
        </p>
        <h1 className="mb-3 sm:mb-5  text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2]  text-center text-black font-varela-round">
          We're on Instagram!
        </h1>
        <div className="flex justify-center items-center gap-5">
          <a href="#">
            <img
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg"
              alt="img-1"
            />
          </a>
          <a href="#">
            <img
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg"
              alt="img-2"
            />
          </a>
          <a href="#">
            <img
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg"
              alt="img-3"
            />
          </a>
          <a href="#">
            <img
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg"
              alt="img-4"
            />
          </a>
          <a href="#">
            <img
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg"
              alt="img-5"
            />
          </a>
          <a href="#">
            <img
              className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
              src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg"
              alt="img-6"
            />
          </a>
        </div>
        <button
          type="submit"
          className="w-full mt-5 lg:w-auto bg-[--primary-color] text-white py-3 px-6 rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
        >
          See More Photos
        </button>
      </div>
    </div>
  );
};

export default About;
