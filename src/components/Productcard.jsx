import React, { useState, useContext } from "react";
import EditProductModal from "./Edditdetails";
import { ProductContext } from "../context/Productslist";
import { useNavigate } from "react-router-dom";



const ProductCard = ({ product, onEdit }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div 
       onClick={() => navigate(`/product/${product.id}`)}
  className="p-4 rounded-3xl shadow-xl m-2 bg-white/80 backdrop-blur-md
             transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-300"
>

        <div>
          <h2 className="font-bold text-lg">{product.name}</h2>
          <p className="text-gray-600 text-sm w-[250px]">{product.description}</p>
          <h3 className="font-semibold text-black">₹{product.price}</h3>
          <p className="text-sm">Stock: {product.stock}</p>
          <p className="text-sm">Category: {product.category}</p>
          <p className={`text-sm font-medium ${product.isActive ? 'text-green-600' : 'text-red-600'}`}>
            {product.isActive ? 'Active' : 'Inactive'}
          </p>
        </div>

        <div className="flex gap-2 mt-3 ">
          <button className="bg-black text-white w-[100px] rounded-3xl p-1" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="bg-[red] text-white w-[100px] rounded-3xl" onClick={() => deleteProduct(product.id)}>
            Delete
          </button>
        </div>
      </div>

      {isEditing && (
        <EditProductModal
          product={product}
          onClose={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default ProductCard;