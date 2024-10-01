import { Link } from "react-router-dom";
import Story from "../Layouts/HomeLayouts/Story";
import BreadCrumbs from "../components/BreadCrumbs";

const About = () => {
  return (
    <div>
      <div className="container mx-auto p-4 md:p-8">
        <div className="w-full md:w-11/12 mx-auto">
          <BreadCrumbs currentPage={"About"} />
        </div>
        <div className="text-center py-8 lg:px-52 xl:px-96">
          <p className="text-sm text-[--primary-color]  mb-3 sm:mb-5 leading-4 font-semibold">
            All You Need is Fun!
          </p>
          <h2 className="mb-3  sm:mb-5 text-[--secondary-color] font-varela-round  sm:text-3xl md:text-5xl  leading-tight sm:leading-[1.2] font-normal text-center">
            Introducing ToyzCity
          </h2>
          <p className="text-[--secondary-color]  font-semibold  mb-4">
            ToysCity helps families buy, sell, and exchange gently-used toys and
            baby gear, promoting sustainability and reducing waste. We’ll also
            offer new eco-friendly products and a donation feature for
            charities, making sure all children have access to quality toys.
            Join us in building a circular economy that values reuse and joy for
            families.
          </p>
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
          <h1 className="mb-3 sm:mb-5 font-varela-round text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2] font-normal text-center text-[--secondary-color]">
            ToyzCity: Exchange, Enjoy, Empower
          </h1>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
            <div className="card-body  max-w-screen-sm">
              <h1 className="text-3xl mb-4 tracking-wider font-bold text-[--secondary-color]">
                Exchange and Sale of Pre-Loved Items{" "}
              </h1>
              <div className="w-32 h-0.5 mt-4 bg-gray-200 relative">
                <div className="w-full h-full bg-[--primary-color] absolute top-0 left-0"></div>
              </div>
              <p className=" mb-5 lg:mb-7 text-base text-[--secondary-color] font-semibold">
                ToyzCity offers a platform for families to easily exchange and
                sell pre-loved toys, strollers, and baby gear. By facilitating
                this trade, we create a sustainable cycle that benefits both the
                environment and families looking to save money. Instead of
                discarding outgrown or unwanted items, parents can give these
                products a second life, reducing waste and allowing others to
                refresh their children's collections affordably. Our
                user-friendly interface makes it simple to list and browse
                gently-used items, fostering a community of environmentally
                conscious families who value reuse and sustainability.
              </p>
              <div className="card-actions flex items-center space-x-4 justify-start">
                <Link
                  to="/register"
                  className="btn bg-[--primary-color] hover:bg-[--secondary-color] text-white rounded-full px-6 py-2"
                >
                  Sign up for FREE!
                </Link>
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
              <h1 className="text-3xl mb-4 tracking-wider font-bold text-[--secondary-color]">
                Upcoming Donation Initiative
              </h1>
              <div className="w-32 h-0.5 mt-4 bg-gray-200 relative">
                <div className="w-full h-full bg-[--primary-color] absolute top-0 left-0"></div>
              </div>
              <p className="mb-5 lg:mb-7 text-base text-[--secondary-color] font-semibold">
                ToyzCity is excited to announce plans for a future donation
                initiative that will allow users to contribute to charitable
                organizations and orphanages. This feature aims to ensure that
                children in need have access to quality toys and essential baby
                items, spreading joy and enhancing play-based learning. By
                encouraging donations, we will not only recycle products but
                also promote a sense of community and support. Stay tuned for
                more details as we work to implement this meaningful initiative,
                helping to create positive change while fostering
                environmentally responsible choices. Join us in our mission to
                make a difference in the lives of children and families
                everywhere!
              </p>
              <div className="flex justify-between items-center mb-8"></div>
            </div>
          </div>
        </div>
        <Story />
        <div className="flex flex-col justify-center items-center max-w-screen-xl  p-6 sm:p-8 md:p-12 rounded-2xl bg-white text-center gap-4">
          <h1 className="mb-3 sm:mb-5  text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[1.2]  text-center text-[secondary-color] font-varela-round">
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
    </div>
  );
};

export default About;
