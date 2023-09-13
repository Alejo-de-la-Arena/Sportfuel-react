import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import ProteinProducts from './components/Products/ProteinProducts';
// import Home from './Home';
// import Cart from "./components/cart/cart";
// import { CartProvider } from "./components/cart/CartContext"; 
import './App.css';
import Home from './Home';
// import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/Products/*" element={<ProteinProducts />} />
        
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
