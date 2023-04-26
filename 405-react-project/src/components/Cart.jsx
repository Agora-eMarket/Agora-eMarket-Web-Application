import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartLayout from "./CartLayout";

export default function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("items")) || [];

  // Calculate the cost of the items in the cart
  let price = 0;
  cartItems.forEach((item) => {
    price += parseFloat(item.price);
  });

  // Calculate the VAT and total price
  const vat = (price * 0.15).toFixed(2);
  const totalPrice = parseFloat(price) + parseFloat(vat);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-inside">
          {cartItems.map((item, index) => (
            <CartLayout
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <hr />
          <div className="cart-stats">
            <h3>Cost: {price.toFixed(2)}</h3>
            <h3>Vat 15%: {vat}</h3>
            <h3>Total Cost: {totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
