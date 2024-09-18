import { useEffect, useState } from "react";
import { fetchItems } from "../services/apiCalls";

const Shop = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await fetchItems();
        setItems(items);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load items.");
        setIsLoading(false);
      }
    };

    getItems();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item) => (
        <div key={item._id} className="card w-64 bg-base-100 shadow-xl m-4 p-4">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
