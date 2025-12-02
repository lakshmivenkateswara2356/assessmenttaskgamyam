import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Productslist";

const ProductDetails = () => {
  const { id } = useParams(); // get product id from URL
  const { products } = useContext(ProductContext);

  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold">Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      <p className={product.isActive ? "text-green-600" : "text-red-600"}>
        {product.isActive ? "Active" : "Inactive"}
      </p>

      <h2 className="text-xl font-bold mt-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
        {relatedProducts.map(p => (
          <Link key={p.id} to={`/product/${p.id}`}>
            <div className="p-4 border rounded shadow hover:scale-105 transition-all cursor-pointer">
              <h3 className="font-semibold">{p.name}</h3>
              <p>₹{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
