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
  async function handleOrderBTN() {
    if (
      formData.cardName.trim() === "" ||
      formData.cardNumber.trim() === "" ||
      formData.address.trim() === "" ||
      formData.cvv.trim() === "" ||
      formData.month.trim() === "" ||
      formData.year.trim() === ""
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    const nameRegex = /^[a-zA-Z ]*$/;
    if (!nameRegex.test(formData.cardName)) {
      alert("Please enter a valid name.");
      return;
    }

    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(formData.cardNumber)) {
      alert("Please enter a valid card number.");
      return;
    }

    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(formData.cvv)) {
      alert("Please enter a valid CVV.");
      return;
    }

    const monthRegex = /^(0?[1-9]|1[012])$/;
    if (!monthRegex.test(formData.month)) {
      alert("Please enter a valid month (MM).");
      return;
    }

    const yearRegex = /^[0-9]{4}$/;
    if (!yearRegex.test(formData.year)) {
      alert("Please enter a valid year (YY).");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: localStorage.getItem("email"),
      items: cartItems,
      totalPrice: totalPrice,
      status: "Delivered",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost/postOrder.php",
      requestOptions
    );
    const result = await response.json();
    console.log(result);

    if (result.success) {
      localStorage.removeItem("items");
      navigate("/");
    } else {
      alert(result.message);
    }
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
          <button
            className="form--submit"
            type="button"
            onClick={handleOrderBTN}
          >
            Confirm Order
          </button>
        </form>
      )}
    </div>
  );
}

export default Payment;
