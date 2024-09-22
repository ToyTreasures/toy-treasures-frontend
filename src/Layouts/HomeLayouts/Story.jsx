import React from "react";
import { Play } from "lucide-react";
import BackgroundImage from "../../assets/story-bg.jpg";

const Story = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-28 px-6 my-20 bg-black bg-opacity-30 bg-blend-overlay bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="flex flex-col items-center text-center max-w-2xl mb-4">
          <h3 className="text-sm font-semibold mb-4 tracking-wider">About The Shop</h3>
          <h2 className="text-4xl font-bold mb-6">Watch Our Story</h2>
          <p className="text-lg">
            There is no magic formula to write perfect ad copy. It is based on a number of factors,
            including ad placement, demographic, even the consumer's mood.
          </p>
        </div>
        <button
          className="flex items-center justify-center w-16 h-16 rounded-full bg-[--primary-color] transition-transform duration-300 ease-in-out transform hover:scale-110"
          onClick={(e) => {
            e.preventDefault();
            console.log("Open video lightbox");
          }}
          aria-label="Watch video"
        >
          <Play size={24} />
        </button>
      </div>
    </section>
  );
};

export default Story;
