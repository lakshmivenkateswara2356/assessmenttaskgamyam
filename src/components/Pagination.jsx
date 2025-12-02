import React, { useContext } from "react";
import { ProductContext } from "../context/Productslist";

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPages } = useContext(ProductContext);
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
   <div className="flex items-center gap-2 mt-6 select-none">
  {/* Previous Button */}
  <button
    type="button"
    aria-label="Previous"
    className="mr-4 disabled:opacity-40"
    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1L2 9.24242L11 17" stroke="#111820" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>

  {/* Pagination Buttons */}
  <div className="flex gap-2 text-gray-500 text-sm md:text-base">
    {pages.map((page) => (
      <button
        key={page}
        type="button"
        onClick={() => setCurrentPage(page)}
        className={`flex items-center justify-center active:scale-95 w-9 md:w-12 h-9 md:h-12 aspect-square rounded-md transition-all
        ${
          page === currentPage
            ? "bg-black text-white shadow-md"
            : "bg-white border border-gray-200 hover:bg-gray-100/70"
        }`}
      >
        {page}
      </button>
    ))}
  </div>

  {/* Next Button */}
  <button
    type="button"
    aria-label="Next"
    className="ml-4 disabled:opacity-40"
    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    <svg width="9" height="16" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L10 9.24242L1 17" stroke="#111820" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>
</div>

  );
};

export default Pagination;