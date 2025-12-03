import React, { useContext, useState } from "react";

import SearchInput from "../Searchfilter";
import ProductForm from "../components/Productform";
import ProductCard from "../components/Productcard";
import ProductRow from "../components/Productable";
import Pagination from "../components/Pagination";
import { ProductContext } from "../context/Productslist";
import CategoryFilter from "../components/Catogery";



import Addbutton from "../components/Button";
import ViewToggleButton from "../components/Toggle";


const ProductsList = () => {
  const { products, view, setView } = useContext(ProductContext);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  return (
    <div className="p-4">
      
      <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <SearchInput />
         
        </div>
        <CategoryFilter/>

     <div className="flex gap-2 items-center">
  <ViewToggleButton view={view} setView={setView} />
  <Addbutton onClick={() => { setEditItem(null); setShowForm(true); }} />
</div>
      </div>

      {showForm && <ProductForm editItem={editItem} onClose={() => setShowForm(false)} />}

      {view === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Stock</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      )}

      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
};

export default ProductsList;