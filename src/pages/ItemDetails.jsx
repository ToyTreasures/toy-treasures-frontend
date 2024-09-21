import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemService from "../services/itemService";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await itemService.getItemById(id);
        setItem(response.item);
      } catch (error) {
        setError(error.error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [id]);

  if (loading) {
    return (
      <div>
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {item ? (
        <div className="card w-full md:w-1/2 lg:w-1/3 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img
              src={`https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png`}
              alt={item.name}
              className="w-full h-auto"
            />
          </figure>
          <div className="card-body">
            {/* <h2 className="card-title text-xl md:text-2xl">{item.name}</h2> */}
            <h2 className="card-title text-xl md:text-2xl">Wooden Camera</h2>
            {/* <p className="text-sm md:text-base">{item.description}</p> */}
            <p className="text-slate-400 text-sm md:text-base">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy. It is based on
              a number of factors.
            </p>
            <p className="text-lg font-bold">${item.price} USD</p>
            <p>Available: {item.count}</p>
            <div className="card-actions justify-end">
              <button className="btn  rounded-full btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg">Item not found.</div>
      )}
    </div>
  );
};

export default ItemDetails;
