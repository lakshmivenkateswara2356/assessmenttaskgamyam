import React, { useContext, useState } from "react";
import { ProductContext } from "../context/Productslist";
import EditProductModal from "./Edditdetails";


const ProductRow = ({ product }) => {
 
  const { deleteProduct } = useContext(ProductContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <tr  className="hover:bg-gray-50 transition">
        <td className="px-4 py-2 border border-gray-300">{product.name}</td>
        <td className="px-4 py-2 border border-gray-300">{product.category}</td>
        <td className="px-4 py-2 border border-gray-300">{product.price}</td>
        <td className="px-4 py-2 border border-gray-300">{product.stock}</td>
        <td className="px-4 py-2 border border-gray-300">{product.description}</td>
         <td className={`text-sm font-medium px-4 py-2 border border-gray-300 ${product.isActive ? 'text-green-600' : 'text-red-600'}`}>
            {product.isActive ? 'Active' : 'Inactive'}
          </td>
        <td className="px-4 py-2 border border-gray-300 flex gap-2">
          {/* Edit Button */}
          <button className="bg-black text-white w-[100px] rounded-3xl p-1" onClick={() => setIsEditing(true)}>Edit</button>

          {/* Delete Button */}
          <button className="bg-[red] text-white w-[100px] rounded-3xl" onClick={() => deleteProduct(product.id)}>Delete</button>
        </td>
      </tr>

      {/* Edit Modal */}
      {isEditing && (
        <EditProductModal product={product} onClose={() => setIsEditing(false)} />
      )}
    </>
  );
};

export default ProductRow;