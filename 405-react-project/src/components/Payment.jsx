import React from "react";

function Payment() {
  const [isLoggedIn, setIsLoggedIn] = React.useState({
    state: localStorage.getItem("isLoggedIn") === "true" || false,
    email: localStorage.getItem("email") || "",
  });

  const [formData, setFormData] = React.useState({
    cardName: "",
    cardNumber: "",
    address: "",
    cvv: "",
    month: "",
    year: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleLogout() {
    setIsLoggedIn({
      state: false,
      email: "",
    });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
  }

  return (
    <div className="form-container">
      {isLoggedIn.state ? (
        <div>
          <p id="loggedInMessage">
            You are logged in as{" "}
            <span id="loggedInEmail">{isLoggedIn.email}</span>
          </p>
          <a className="loggedBtn" href="/">
            Home
          </a>
          <a className="loggedBtn" href="/" onClick={handleLogout}>
            Log out
          </a>
        </div>
      ) : (
        <form className="form">
          <h1>
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
          <p className="form--label">Payement Type</p>
          <select id="paymentOptions">
            <option value="Visa">Visa</option>
            <option value="MasterCard">Master Card</option>
            <option value="Mada">Mada</option>
          </select>
          <button className="form--submit">Pay</button>
        </form>
      )}
    </div>
  );
}

export default Payment;
