import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/Productdetails";
import ProductsList from "./pages/ProductsList";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
