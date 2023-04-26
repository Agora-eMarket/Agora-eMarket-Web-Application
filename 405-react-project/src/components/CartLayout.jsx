import React from "react";
export default function CartLayout(item) {
  return (
    <div className="cart-item">
      <img src={item.img} className="cart-img" />
      <div className="cart-item-name">
        <h3>{item.name}</h3>
        <h5>{item.quantity}</h5>
      </div>
      <h4>{item.price.toFixed(2)}</h4>
    </div>
  );
}
