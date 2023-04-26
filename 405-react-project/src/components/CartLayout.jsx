import React from "react";
export default function CartLayout({item}) {
    return (
        <div className="cart-item">
            <img src={item.img} className="cart-img" />
            <div className="cart-item-name">
            <h3>{item.name}</h3>
            <h5>{item.description}</h5>
            </div>
            <h4>{item.price}</h4>
        </div>
    )
}