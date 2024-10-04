import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import itemApiRequests from "../services/apiRequests/itemApiRequests";
import StuffedAnimals from "../Layouts/HomeLayouts/StuffedAnimals";
import WoodenToys from "../Layouts/HomeLayouts/WoodenToys";
import ZoomableImage from "../components/MagnifyingGlassImage";
import MagnifyingGlassImage from "../components/MagnifyingGlassImage";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getConditionColor = (condition) => {
    switch (condition) {
      case "new":
        return "bg-green-500";
      case "gently used":
        return "bg-yellow-500";
      case "used":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

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
      <div className="flex mx-auto w-full lg:w-3/5 flex-col gap-4 h-screen my-20">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="container mx-auto w-full lg:w-4/5 bg-base-100 shadow-2xl rounded-2xl my-14 p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row">
          <figure className="lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0 order-1 lg:order-2">
            <div className="w-full aspect-square">
              <MagnifyingGlassImage
                src={item.thumbnail}
                alt={item.name}
                magnifierSize={120}
                zoomLevel={2.5}
              />
            </div>
          </figure>
          <div className="lg:w-2/3 pr-0 lg:pr-10 order-2 lg:order-1">
            <h1 className="card-title mb-4 text-2xl lg:text-4xl font-semibold text-[var(--secondary-color)]">
              {item.name}
            </h1>
            <p className="text-[var(--secondary-color)] mb-5 text-base">
              {item.description}
            </p>
            <p className="text-[var(--secondary-color)] mb-5 text-base pb-3">
              Condition:
              <span
                className={`inline-block px-2 ml-2 text-xs font-semibold text-white ${getConditionColor(
                  item.condition
                )} rounded-md`}
              >
                {item.condition}
              </span>
            </p>
            {item.isAvailableForSwap && (
              <span className="text-xs p-1 rounded-lg text-[--primary-color] border border-[--primary-color] animate-text-shimmer bg-gradient-to-r from-[--primary-color] via-[--secondary-color] to-[--primary-color] bg-[length:200%_100%] bg-clip-text text-transparent">
                Available For Swap
              </span>
            )}
            <p className="text-4xl font-bold mt-4 mb-6 text-[var(--secondary-color)]">
              ${item.price.toFixed(2)} USD
            </p>
            <Link
              to="/wishlist"
              className="btn bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white rounded-full px-6 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Wishlist
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full lg:w-11/12 my-14">
        <h2 className="text-xl font-bold text-center mb-4 text-[var(--secondary-color)]">
          You Might Also Like
        </h2>
        <StuffedAnimals />
        <WoodenToys />
      </div>
    </div>
  );
};

export default ItemDetails;
