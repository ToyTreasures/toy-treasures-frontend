import React, { useEffect, useState } from "react";
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {item ? (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={`https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5baf522457091399591a83fe_33631-9-wooden-toy-photo-min.png`}
              alt={item.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-lg font-bold">${item.price}</p>
            <p>Available: {item.count}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div>Item not found.</div>
      )}
    </div>
  );
};

export default ItemDetails;
