import React from 'react';
import { ProductProvider } from './context/Productslist';
import ProductPage from './pages/Products';


const App = () => {
  return (
    <ProductProvider>
      <ProductPage />
    </ProductProvider>
  );
};

export default App;