import React from "react";
import { Link } from "react-router-dom";

import { TiArrowRight } from "react-icons/ti";

const BreadCrumbs = ({ currentPage }) => {
  return (
    <div className="breadcrumbs text-sm text-gray-400 border px-7 py-3 rounded-full border-gray-300">
      <ul>
        <Link to={"/"} className="underline">
          Home
        </Link>
        <TiArrowRight size={20} className="mx-2" />
        <span>{currentPage}</span>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
