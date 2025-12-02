import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/Productslist";
import { FaTimes } from "react-icons/fa";

const ProductForm = ({ editItem, onClose }) => {
  const { add, edit } = useContext(ProductContext);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    isActive: true,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editItem) setFormData(editItem);
  }, [editItem]);

  // VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Product name is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.price) newErrors.price = "Price is required.";
    if (!formData.stock) newErrors.stock = "Stock quantity is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submit
    }

    if (editItem) {
      edit(formData);
    } else {
      add(formData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">
          {editItem ? "Edit Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Product Name */}
          <div>
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full border px-3 py-2 rounded ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className={`w-full border px-3 py-2 rounded ${
                errors.category ? "border-red-500" : ""
              }`}
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className={`w-full border px-3 py-2 rounded ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price}</p>
            )}
          </div>

          {/* Stock */}
          <div>
            <input
              type="number"
              placeholder="Stock Quantity"
              value={formData.stock}
              onChange={(e) =>
                setFormData({ ...formData, stock: e.target.value })
              }
              className={`w-full border px-3 py-2 rounded ${
                errors.stock ? "border-red-500" : ""
              }`}
            />
            {errors.stock && (
              <p className="text-red-500 text-sm mt-1">{errors.stock}</p>
            )}
          </div>

          {/* Description */}
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border px-3 py-2 rounded"
          />

          {/* Active/Inactive */}
          <select
            className="w-full border px-3 py-2 rounded"
            value={formData.isActive}
            onChange={(e) =>
              setFormData({ ...formData, isActive: e.target.value === "true" })
            }
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border text-gray-700 rounded hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              {editItem ? "Update" : "Add"}
            </button>
          </div>
          {/* Show Required Message */}
{Object.keys(errors).length > 0 && (
  <p className="text-red-500 text-sm font-medium">
    ⚠ Required fields are important — please fill them.
  </p>
)}

        </form>
      </div>
    </div>
  );
};

export default ProductForm;
