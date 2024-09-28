import { useEffect, useState } from "react";
import userApiRequests from "../services/userApiRequests";
import { useParams } from "react-router-dom";
import UserDetailsSkeleton from "../components/skeletons/UserDetailsSkeleton";

const SellerContacts = () => {
  const [seller, setSeller] = useState(null);
  const [error, setError] = useState(null);
  const { id: sellerId } = useParams();

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const res = await userApiRequests.getUserById(sellerId);
        setSeller(res.user);
      } catch (error) {
        setError(
          error || "Error fetching seller details, please try again later"
        );
      }
    };
    fetchSellerDetails();
  }, [sellerId]);

  if (error)
    return (
      <div className="container bg-error flex w-full lg:w-[65%] max-w-6xl mx-auto justify-center my-2 md:my-4 p-4 md:p-8">
        <p className="text-lg md:text-2xl">{error}</p>
      </div>
    );

  if (!seller) return <UserDetailsSkeleton />;

  return (
    <div className="flex w-full lg:w-[65%] max-w-6xl mx-auto justify-center my-2 md:my-4 p-4 md:p-8">
      <div className="container mx-auto w-full md:w-3/4 p-4 md:p-8 rounded-lg bg-white shadow-2xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6">
          Seller Contact Information
        </h1>
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between lg:justify-around space-y-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:items-center md:flex-row gap-4">
              <div className="text-lg font-semibold">Name:</div>
              <div className="p-3 rounded-lg bg-gray-100">{seller.name}</div>
            </div>
            <div className="flex flex-col md:items-center md:flex-row gap-4">
              <div className="text-lg font-semibold">Address:</div>
              <div className="p-3 rounded-lg bg-gray-100">{seller.address}</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:items-center md:flex-row gap-4">
              <div className="text-lg font-semibold">Email:</div>
              <div className="p-3 rounded-lg bg-gray-100">
                <a
                  href={`mailto:${seller.email}`}
                  className="text-blue-600 underline"
                >
                  {seller.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col md:items-center md:flex-row gap-4">
              <div className="text-lg font-semibold">Phone:</div>
              <div className="p-3 rounded-lg bg-gray-100">
                <a
                  href={`tel:${seller.phoneNumber}`}
                  className="text-blue-600 underline"
                >
                  {seller.phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerContacts;
