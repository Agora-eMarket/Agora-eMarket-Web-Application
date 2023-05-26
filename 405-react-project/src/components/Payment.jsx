import React from "react";
import { useNavigate } from "react-router-dom";
import useCartCost from "./hooks/useCartCost.jsx";

function Payment() {
  const navigate = useNavigate();
  const { price, vat, totalPrice, cartItems } = useCartCost();
  const [formData, setFormData] = React.useState({
    cardName: "",
    cardNumber: "",
    address: "",
    cvv: "",
    month: "",
    year: "",
  });

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true" || false;
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="form-container">
      {!isLoggedIn ? (
        navigate("/Login")
      ) : cartItems.length === 0 ? (
        <div>
          <p className=".aboutUs-p">
            Your cart is empty. Please add some items before proceeding.
          </p>
          <a className="checkout-btn" href="/Menu">
            Go to Menu
          </a>
        </div>
      ) : (
        <form className="form">
          <h1 className="form-payment">
            <a href="/">
              <span className="form-title">Payment</span> Information
            </a>
          </h1>
          <p>Your order is clicks away from being placed</p>
          <label htmlFor="cardName" className="form--label">
            Name on Card
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="form--input"
            name="cardName"
            onChange={handleChange}
            value={formData.cardName}
            required
          />
          <label htmlFor="cardNumber" className="form--label">
            Card Number
          </label>
          <input
            type="text"
            placeholder="5471933417647301"
            className="form--input"
            name="cardNumber"
            onChange={handleChange}
            value={formData.cardNumber}
            required
          />
          <div className="payment-label-flex">
            <label htmlFor="cardNumber" className="form--label" id="cvvLabel">
              CVV
            </label>
            <label
              htmlFor="cardNumber"
              className="form--label"
              id="expireLabel"
            >
              Expire Date
            </label>
          </div>
          <div className="payment--flex">
            <input
              type="number"
              placeholder="000"
              className="payment--info"
              id="cvv"
              name="cvv"
              onChange={handleChange}
              value={formData.cvv}
              max="999"
              min="000"
              required
            />
            <input
              type="text"
              placeholder="MM"
              className="payment--info"
              id="expire-month"
              name="month"
              onChange={handleChange}
              value={formData.month}
              max="12"
              min="1"
              required
            />
            <input
              type="text"
              placeholder="YY"
              className="payment--info"
              id="expire-year"
              name="year"
              onChange={handleChange}
              value={formData.year}
              required
            />
          </div>
          <label htmlFor="cardName" className="form--label">
            Delivery Address
          </label>
          <input
            type="text"
            placeholder="Delivery Address"
            className="form--input"
            name="address"
            onChange={handleChange}
            value={formData.address}
            required
          />
          <div className="form--type">
            <div id="payment-type">
              <p className="form--label margTop">Payment Type</p>
              <select id="paymentOptions">
                <option value="Visa">Visa</option>
                <option value="MasterCard">Master Card</option>
                <option value="AmericanExpress">American Express</option>
              </select>
            </div>
            <div className="cart-stats">
              <h3>Cost: {price.toFixed(2)}</h3>
              <h3>Vat 15%: {vat}</h3>
              <h3>Total Cost: {totalPrice.toFixed(2)}</h3>
            </div>
          </div>
          <button className="form--submit" type="button">
            Confirm Order
          </button>
        </form>
      )}
    </div>
  );
}

export default Payment;
