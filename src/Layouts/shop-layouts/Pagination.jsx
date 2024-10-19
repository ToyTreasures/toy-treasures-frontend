import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className={`text-lg font-bold transition-colors duration-200 p-2 rounded-full shadow-lg ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>

      <div className="flex items-center justify-center mx-3 gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
              page === currentPage
                ? "bg-[var(--secondary-color)] text-white font-bold shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`text-lg font-bold transition-colors duration-200 p-2 rounded-full shadow-lg ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[var(--primary-color)] text-white hover:bg-[var(--primary-color)]"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
