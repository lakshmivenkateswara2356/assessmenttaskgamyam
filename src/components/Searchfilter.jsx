import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Productslist";

const SearchInput = () => {
  const { allProducts, setSearch } = useContext(ProductContext);
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(value);

      // Filter for dropdown suggestions
      if (value.trim() === "") {
        setResults([]);
      } else {
        const filtered = allProducts
          .filter((p) =>
            p.name.toLowerCase().includes(value.toLowerCase())
          )
          .slice(0, 5); // show top 5 results
        setResults(filtered);
      }
    }, 300); // debounce

    return () => clearTimeout(handler);
  }, [value, allProducts, setSearch]);

  return (
    <div className="flex flex-col gap-2 relative max-w-xs w-full">
      {/* Search Input */}
      <div className="flex items-center border pl-3 gap-2 bg-white border-gray-300/50 h-12 rounded-md overflow-hidden">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.75 15.75-3.262-3.262M14.25 8.25a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
            stroke="#6B7280"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search products..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
        />
      </div>

      {/* Search Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute z-10 top-full left-0 w-full py-2 bg-white border border-gray-300/50 rounded-md shadow-md overflow-hidden">
          <h5 className="text-xs pb-1 text-gray-800/80 px-3">Search Results</h5>
          {results.map((product) => (
            <p
              key={product.id}
              onClick={() => setValue(product.name)}
              className="text-sm text-gray-500 py-1 hover:bg-gray-200/80 cursor-pointer px-3"
            >
              {product.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;