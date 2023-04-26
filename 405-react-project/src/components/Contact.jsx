import React from "react";
import dollarSign from "./dollar-sign.png";
export default function Contact({ props }) {
  const addCart = () => {
    console.log(props.name, " has been added to cart");
  };
  return (
    <div className="contact-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group" id="inf">
        <p>{props.discreption}</p>
      </div>
      <div className="info-group">
        <img src={dollarSign} alt="" />
        <p>{props.price} SAR </p>
      </div>
      <div className="flex">
        <button
          className="add-btn"
          onClick={addCart}
        >
          Add to cart
        </button>
        <input type="number" className="quantity" min="1"></input>
      </div>
    </div>
  );
}