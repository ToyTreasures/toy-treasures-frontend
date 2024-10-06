import { forwardRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoryApiRequests from "../../services/apiRequests/categoryApiRequests";

const CategoriesSection = forwardRef((props, ref) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const colors = [
    "bg-[#ffc12c]",
    "bg-[#fb416b]",
    "bg-[#4a90e2]",
    "bg-[#50c878]",
  ];

  useEffect(() => {
    const fetchToyTypes = async () => {
      try {
        setLoading(true);
        const response = await categoryApiRequests.getAllCategories();
        setCategories(response.categories);
        setLoading(false);
      } catch (err) {
        setError("Failed to load toy types: " + err.message);
        setLoading(false);
      }
    };

    fetchToyTypes();
  }, []);

  if (loading) return <p>Loading toy types...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section ref={ref} className="py-8 sm:py-12 md:py-16">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className={`flex flex-row ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              } items-center text-white w-full rounded-2xl shadow-lg overflow-hidden transform scale-90 sm:scale-100 origin-top ${
                colors[index]
              }`}
            >
              <img
                src={category.thumbnail}
                alt={category.name}
                className="w-2/5 h-48 sm:h-48 object-contain pr-1"
              />
              <div
                className={`p-3 sm:p-6 ${
                  index % 2 !== 0 ? "text-right" : "text-left"
                } flex flex-col justify-start items-start w-3/5`}
              >
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                  {category.name}
                </h3>
                <Link
                  to={`/shop?category=${encodeURIComponent(category.name)}`}
                  className="flex justify-center items-center font-semibold bg-white text-[--secondary-color] text-xs sm:text-sm md:text-base h-8 sm:h-9 md:h-10 w-20 sm:w-24 md:w-28 rounded-full duration-300 hover:shadow-[0_8px_8px_-4px_rgba(17,17,17,0.2)] hover:transform hover:scale-105 transition-all ease-in-out mt-1"
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

export default CategoriesSection;
