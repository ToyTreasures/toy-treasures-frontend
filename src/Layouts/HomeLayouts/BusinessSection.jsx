import businessImage from "../../assets/business-img.jpeg";
import { Link } from "react-router-dom";

const BusinessSection = () => {
  return (
    <section className="flex flex-col justify-center items-center my-28 w-4/5 mx-auto">
      <div className="flex flex-col justify-center items-center w-full max-w-[1200px] bg-transparent">
        <div className="flex flex-col items-center max-w-[600px] mb-20 px-4 text-center">
          <h2 className="text-5xl mb-4 text-[--secondary-color] font-bold">
            ToyzCity
          </h2>
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
              <h2 className="text-3xl mb-4 tracking-wider font-bold text-[--secondary-color]">
                Sign up for FREE!
              </h2>
              <div className="w-[70px] h-[2px] my-6 bg-[--primary-color]"></div>
              <p className="text-[--secondary-color] mb-6 font-semibold">
                ToyzCity is revolutionizing how families handle children's toys
                by providing a platform for exchanging and selling pre-loved
                items, giving them a second life. This innovative approach not
                only reduces waste but also helps parents refresh their
                children's toy collections affordably. Join our community of
                environmentally conscious families who value reuse and
                sustainability.
              </p>
              <div className="w-full flex justify-center lg:justify-start ">
                <Link
                  to="/register"
                  className="flex items-center justify-center w-full md:w-auto h-12 px-7 rounded-full bg-[--primary-color] text-white text-sm font-semibold transition-all duration-300 ease-in-out hover:transform hover:scale-105"
                >
                  SIGN UP NOW!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
