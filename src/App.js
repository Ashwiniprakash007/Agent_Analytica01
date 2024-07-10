import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/edit/:productId" element={<EditProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
