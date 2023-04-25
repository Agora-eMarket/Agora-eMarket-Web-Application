import React from "react";
import dollarSign from "./dollar-sign.png";
export default function Contact({ props }) {
  const [quantity, setQuantity] = React.useState(1);
  // const [cartItems, setCartItems] = React.useState([]);
  function handleQuantityChange(event) {
    const newQuantity = Number(event.target.value);
    if (newQuantity < 1) {
      setQuantity(1);
      return;
    }
    setQuantity(newQuantity);
  }

  const addCart = () => {
    const newItem = {
      img: props.img,
      name: props.name,
      price: props.price * quantity,
      quantity: quantity,
    };

    const storedItems = localStorage.getItem("items");

    let parsedItems = [];

    if (storedItems && storedItems !== "") {
      parsedItems = JSON.parse(storedItems);
    }

    const existingItem = parsedItems.find((item) => item.name === newItem.name);

    if (existingItem) {
      existingItem.quantity += newItem.quantity;
      existingItem.price += newItem.price;
    } else {
      parsedItems.push(newItem);
    }

    localStorage.setItem("items", JSON.stringify(parsedItems));

    // setCartItems(parsedItems);
  };
  return (
    <div className="contact-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group" id="inf">
        <p>{props.description}</p>
      </div>
      <div className="info-group">
        <p id="priceTag">SAR {props.price}</p>
      </div>
      <div className="flex">
        <button
          className="add-btn"
          //   style={{ marginRight: "10px" }}
          onClick={addCart}
        >
          Add to cart
        </button>
        <input
          type="number"
          className="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        ></input>
        {/* <button className="contact-card-btn" onClick={decrease}>
          -
        </button>
        <p>{counter}</p>
        <button className="contact-card-btn" onClick={increase}>
          +
        </button> */}
      </div>
      {/* <h1 style={{display: props.num ? 'block' : 'none'}}>{1 + props.num}</h1> */}
    </div>
  );
}
