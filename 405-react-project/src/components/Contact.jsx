import React from "react";
import dollarSign from "./dollar-sign.png";
export default function Contact({ props }) {
  const [quantity, setQuantity] = React.useState(1);

  function handleQuantityChange(event) {
    const newQuantity = Number(event.target.value);
    if (newQuantity < 1) {
      setQuantity(1);
    } else {
      setQuantity(newQuantity);
    }
  }

  const addCart = () => {
    const newItem = {
      img: props.img,
      name: props.name,
      price: props.price * quantity,
      quantity: quantity,
    };

    // Retrieve existing items from local storage
    const storedItems = localStorage.getItem("items");

    let parsedItems = [];

    if (storedItems && storedItems !== "") {
      // Parse the stored items string
      parsedItems = JSON.parse(storedItems);
    }

    // Check if the new item already exists in the cart
    const existingItem = parsedItems.find((item) => item.name === newItem.name);

    if (existingItem) {
      // If the item exists, update its quantity
      existingItem.quantity += newItem.quantity;
      existingItem.price += newItem.price;
    } else {
      // If the item does not exist, add it to the cart
      parsedItems.push(newItem);
    }

    // Store the updated cart items in local storage
    localStorage.setItem("items", JSON.stringify(parsedItems));
  };
  return (
    <div className="contact-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group" id="inf">
        <p>{props.discreption}</p>
      </div>
      <div className="info-group">
        <p id="priceTag">SAR {props.price}</p>
      </div>
      <div className="flex">
        <button className="add-btn" onClick={addCart}>
          Add to cart
        </button>
        <input
          type="number"
          className="quantity"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        ></input>
      </div>
    </div>
  );
}
