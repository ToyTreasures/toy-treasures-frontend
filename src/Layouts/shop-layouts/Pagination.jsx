import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="join mt-6 flex flex-wrap justify-center items-center">
      <button
        className="text-white text-xl font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-color)] transition-colors duration-200 join-item btn btn-sm w-10"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>
      <div className="flex items-center justify-center mx-3 gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`
              text-md w-9 h-9 rounded-full
              ${
                page === currentPage
                  ? "bg-[var(--secondary-color)] text-white font-bold"
                  : "text-gray-700 hover:bg-gray-300 hover:text-gray-900"
              }
              transition-colors duration-200
            `}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="text-white text-xl font-bold bg-[var(--primary-color)] hover:bg-[var(--primary-color)] transition-colors duration-200 join-item btn btn-sm w-10"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
