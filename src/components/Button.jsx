import React from 'react'
import { FaPlus } from "react-icons/fa";

const Addbutton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 flex items-center justify-center h-8 w-8 bg-black text-white shadow-md hover:bg-gray hover:scale-110 transition transform "
    >
      <FaPlus size={11} />
    </button>
  );
};

export default Addbutton;