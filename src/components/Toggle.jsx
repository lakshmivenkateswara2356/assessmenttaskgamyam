import React, { useContext } from "react";
import { ProductContext } from "../context/Productslist";
import { FiGrid, FiList } from "react-icons/fi"; // grid & list icons




const ViewToggleButton = () => {
  const { view, setView } = useContext(ProductContext);

  const toggleView = () => {
    setView(view === "card" ? "list" : "card");
  };

  return (
    <button
      onClick={toggleView}
      className="flex items-center gap-2 px-3 py-2 bg-black text-white  hover:bg-black transition"
    >
      {view === "card" ? <FiList size={16} /> : <FiGrid size={16} />}
      
    </button>
  );
};

export default ViewToggleButton;