import ItemCard from "../../components/cards/ItemCard";

const ItemGrid = ({ items, loading, error, onRetry }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-error text-center">
        <p>{error}</p>
        <button className="btn btn-primary mt-4" onClick={onRetry}>
          Try Again
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return <p className="text-center">No items found.</p>;
  }

  return (
    <div className="w-full md:w-3/4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;
