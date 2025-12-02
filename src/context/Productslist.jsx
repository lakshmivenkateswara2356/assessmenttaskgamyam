import React, { createContext, useState } from "react";
import productsData from "../assets/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(productsData);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All"); // New
  const [view, setView] = useState("card");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // Filter products by search and category
  const filteredProducts = allProducts.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" ? true : p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Add new Product
  const add = (newProduct) => {
    setAllProducts([...allProducts, { id: Date.now(), ...newProduct }]);
  };

  // Edit product
  const edit = (updatedProduct) => {
    setAllProducts(
      allProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  // Delete product
  const deleteProduct = (id) => {
    setAllProducts(allProducts.filter((p) => p.id !== id));
  };

  // Pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <ProductContext.Provider
      value={{
        products: currentProducts,
        allProducts,
        add,
        edit,
        deleteProduct,
        view,
        setView,
        search,
        setSearch,
        categoryFilter,     
        setCategoryFilter,  
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};