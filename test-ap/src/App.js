import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./comp/Layout/layout";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ProductDetails from "./pages/productDetails";
import CheckoutSuccess from "./pages/checkoutSuccess";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route
            path="/checkoutSuccess"
            element={<CheckoutSuccess setCart={setCart} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
