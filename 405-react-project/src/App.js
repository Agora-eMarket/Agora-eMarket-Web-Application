import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import Home from "./components/Home.jsx";
import Menu from "./components/Menu.jsx";
import Register from "./components/SignUp.jsx";
import Login from "./components/SignIn.jsx";
import Payment from "./components/Payment.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./components/Orders.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
