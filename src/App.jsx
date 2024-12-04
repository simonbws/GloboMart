import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/Cart/CartPage";
import MyOrderPage from "./components/MyOrder/MyOrderPage";
import LoginPage from "./Authentication/LoginPage";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage />
        <ProductsPage />
        <SingleProductPage />
        <CartPage /> 
        <MyOrderPage /> */}
        <LoginPage />
      </main>
    </div>
  );
};

export default App;
