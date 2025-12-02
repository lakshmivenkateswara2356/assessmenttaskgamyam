import React, { useContext } from "react";
import { ProductContext } from "../context/Productslist";

const CategoryFilter = () => {
  const { allProducts, categoryFilter, setCategoryFilter } = useContext(ProductContext);

  // Get unique categories dynamically
  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategoryFilter(cat)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition
            ${
              categoryFilter === cat
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;