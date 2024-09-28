import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemApiRequests from "../services/itemApiRequests";
import StuffedAnimals from "../Layouts/HomeLayouts/StuffedAnimals";
import WoodenToys from "../Layouts/HomeLayouts/WoodenToys";
import { IoIosSend } from "react-icons/io";
const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await itemApiRequests.getItemById(id);
        setItem(response.item);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  if (loading) {
    return (
      <div className="flex mx-auto w-full lg:w-3/5 flex-col gap-4 h-screen my-20 ">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="container mx-auto w-full lg:w-4/5 bg-base-100 shadow-2xl rounded-2xl my-14">
        <div className="flex flex-col lg:flex-row p-6 lg:p-10">
          <div className="card-body lg:w-2/3">
            <h1 className="card-title mb-4 lg:mb-5 leading-6 text-2xl lg:text-4xl">
              Wooden Camera
            </h1>
            <p className="text-gray-400 mb-5 lg:mb-7 text-base">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy. It is based on
              a number of factors.
            </p>
            <p className="text-4xl font-bold font- mb-6 lg:mb-8 text-[var(--primary-color)]">
              ${item.price.toFixed(2)} USD
            </p>
            <div className="card-actions flex items-center space-x-4 justify-start">
              <input
                type="number"
                className="border rounded-full px-4 py-1 w-20 "
              />
              <button className="btn bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white rounded-full px-6">
                Add to Cart
              </button>
            </div>
          </div>
          <figure className="lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0">
            <img
              className="w-full max-w-md"
              src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png"
              alt="Wooden Camera"
            />
          </figure>
        </div>

        <div className="container p-6 lg:p-10">
          <div className="flex justify-between items-center mb-6 lg:mb-8">
            <h5 className="text-lg lg:text-xl">Product Details</h5>
            <div className="flex items-center space-x-2">
              <span className="text-slate-400">SKU:</span>
              <span className="text-slate-400">35003</span>
            </div>
          </div>
          <div className="w-full h-0.5 mt-8 bg-gray-200 relative mb-8">
            <div className="w-[136px] h-full bg-lime-500 absolute top-0 left-0"></div>
          </div>

          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-10">
            <div className="p-6 rounded-xl lg:w-2/3">
              <h4 className="text-lg mb-4">Add Your Product Description</h4>
              <p className="text-gray-600 mb-4">
                The rich text element allows you to create and format headings,
                paragraphs, blockquotes, images, and video all in one place
                instead of having to add and format them individually.
              </p>
              <h4 className="text-lg mb-2">Simple & Elegant Template</h4>
              <p className="text-gray-600 mb-4">
                Headings, paragraphs, blockquotes, figures, images, and figure
                captions can all be styled after a class is added to the rich
                text element using the When inside of nested selector system.
              </p>
              <ul className="list-disc pl-5 mb-4">
                <li>Beautifully Designed</li>
                <li>Fully Responsive</li>
                <li>CMS Content</li>
                <li>Smooth Animations</li>
              </ul>
              <p className="text-gray-600">
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action.
              </p>
              <h5 className="text-lg mt-6">Perfect Choice for Your Business</h5>
              <p className="text-gray-600">
                Grabbing the consumer’s attention isn’t enough; you have to keep
                that attention for at least a few seconds. This is where your
                benefits come into play or a product description that sets your
                offer apart from the others.
              </p>
            </div>

            <div className="lg:w-1/3 border-2 border-slate-200 rounded-xl p-4 h-48">
              <div className="flex justify-between border-b-2 pb-2 mb-2">
                <div>Width</div>
                <div>15.8 in</div>
              </div>
              <div className="flex justify-between border-b-2 pb-2 mb-2">
                <div>Height</div>
                <div>12.5 in</div>
              </div>
              <div className="flex justify-between border-b-2 pb-2 mb-2">
                <div>Length</div>
                <div>4 in</div>
              </div>
              <div className="flex justify-between">
                <div>Weight</div>
                <div>16 oz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full lg:w-11/12 my-14">
        <div>
          <StuffedAnimals />
          <WoodenToys />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
