import { forwardRef } from "react";
import { Link } from "react-router-dom";
import technologyImage from "../../assets/technology .png";
import actionImage from "../../assets/action.png";

const ToysTypeSection = forwardRef((props, ref) => {
  const toyTypes = [
    {
      name: "Stuffed Animals",
      color: "bg-[#ffc12c]",
      image:
        "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min.png",
    },
    {
      name: "Wooden Toys",
      color: "bg-[#fb416b]",
      image:
        "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min.png",
    },
    {
      name: "Technology",
      color: "bg-[#4a90e2]",
      image: technologyImage,
    },
    {
      name: "Action Figures",
      color: "bg-[#50c878]",
      image: actionImage,
    },
  ];

  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {toyTypes.map((toy, index) => (
            <div
              key={toy.name}
              className={`flex flex-row ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              } items-center text-white w-full rounded-2xl shadow-lg overflow-hidden transform scale-90 sm:scale-100 origin-top ${
                toy.color
              }`}
            >
              <img
                src={toy.image}
                alt={toy.name}
                className="w-2/5 h-48 sm:h-48 object-contain pr-1"
              />
              <div
                className={`p-3 sm:p-6 ${
                  index % 2 !== 0 ? "text-right" : "text-left"
                } flex flex-col justify-start items-start w-3/5`}
              >
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                  {toy.name}
                </h3>
                <Link
                  to="/shop"
                  className="flex justify-center items-center bg-white text-[#111] text-base sm:text-sm h-10 w-2/5 rounded-full duration-300 hover:shadow-[0_8px_8px_-4px_rgba(17,17,17,0.2)] hover:transform hover:scale-105 transition-all ease-in-out mt-1"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default ToysTypeSection;
