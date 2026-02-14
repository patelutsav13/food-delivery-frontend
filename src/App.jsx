
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Foods from "./pages/foods";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Navbar from "./pages/navbar";
import Admin from "./pages/admin";
import Account from "./pages/account";
import ProDetails from "./pages/proDetails";
import Checkout from "./pages/Checkout";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product/:id" element={<ProDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
