import React from "react";

const UserDetailsSkeleton = () => {
  return (
    <div className="container mx-auto w-full md:w-3/4 p-4 md:p-8 rounded-lg bg-white shadow-2xl">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mt-2 mb-6">
        Seller Contact Information
      </h1>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between lg:justify-around space-y-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:items-center md:flex-row gap-4">
            <div className="text-lg font-semibold">Name:</div>
            <div className="skeleton h-4 w-44"></div>
          </div>
          <div className="flex flex-col md:items-center md:flex-row gap-4">
            <div className="text-lg font-semibold">Address:</div>
            <div className="skeleton h-4 w-44"></div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:items-center md:flex-row gap-4">
            <div className="text-lg font-semibold">Email:</div>
            <div className="skeleton h-4 w-44"></div>
          </div>
          <div className="flex flex-col md:items-center md:flex-row gap-4">
            <div className="text-lg font-semibold">Phone:</div>
            <div className="skeleton h-4 w-44"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsSkeleton;
