import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/Cart/CartPage";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HomePage />
        <ProductsPage />
        <SingleProductPage />
        <CartPage />
      </main>
    </div>
  );
};

export default App;
