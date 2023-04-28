import React from "react";
import { useNavigate } from "react-router-dom";
import useCartCost from "./hooks/useCartCost.jsx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartLayout from "./CartLayout";

export default function Cart() {
  const navigate = useNavigate();
  const {
    price,
    vat,
    totalPrice,
    cartItems,
    setPrice,
    setVat,
    setTotalPrice,
    setCartItems,
  } = useCartCost();

  function handleCheckoutButtonClick() {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/Payment");
    } else {
      navigate("/Login?fromCartPage=true");
    }
  }

  function changePrice() {
    const cartItems = JSON.parse(localStorage.getItem("items")) || [];
    var newPrice = 0;
    cartItems.forEach((item) => {
      newPrice += parseFloat(item.price);
    });
    setPrice(newPrice);

    // Calculate the VAT and total price
    var newVat = (newPrice * 0.15).toFixed(2);
    setVat(newVat);
    var newTotalPrice = parseFloat(newPrice) + parseFloat(newVat);
    setTotalPrice(newTotalPrice);
  }

  function handleItemDelete() {
    const updatedCartItems = JSON.parse(localStorage.getItem("items")) || [];
    setCartItems(updatedCartItems);
    changePrice();
    window.location.reload();
  }

  function handlePriceChange() {
    changePrice();
  }

  return (
    <>
      <Navbar />
      {cartItems.length < 1 ? (
        <div className="cart-container">
          <p className="cart-p">Your cart is empty</p>
          <a className="checkout-btn" href="/Menu">
            Go to Menu
          </a>
        </div>
      ) : (
        <div className="cart-container">
          <h1>Your Cart</h1>
          <div className="cart-inside">
            {cartItems.map((item, index) => (
              <CartLayout
                key={index}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                handleChange={handlePriceChange}
                handleDelete={handleItemDelete}
              />
            ))}
          </div>
          <div className="cart-stats">
            <h3>Cost: {price.toFixed(2)}</h3>
            <h3>Vat 15%: {vat}</h3>
            <h3>Total Cost: {totalPrice.toFixed(2)}</h3>
            <button
              className="checkout-btn"
              onClick={handleCheckoutButtonClick}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
