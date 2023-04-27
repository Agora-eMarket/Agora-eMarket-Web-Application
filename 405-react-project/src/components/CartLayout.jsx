import React from "react";

export default function CartLayout(item) {
  const [quantity, setQuantity] = React.useState(item.quantity);
  const [price, setPrice] = React.useState(item.price);

  function handleQuantityChange(event) {
    const newQuantity = Number(event.target.value);

    if (newQuantity < 1) {
      setPrice(price / quantity);
      setQuantity(1);
    } else {
      setPrice((price / quantity) * newQuantity);
      setQuantity(newQuantity);
    }

    // Call the function to update the cart items in local storage
    updateCartItemsInLocalStorage(item.name, newQuantity);
    item.handleChange();
  }

  function handleDeleteButtonClick() {
    updateCartItemsInLocalStorage(item.name, 0);
    item.handleDelete();
  }

  function updateCartItemsInLocalStorage(itemName, newQuantity) {
    // Get the existing cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem("items")) || [];
    // Find the item in the cart with the matching ID
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);

    // If the item exists in the cart, update its quantity
    if (itemIndex !== -1) {
      if (newQuantity === 0) {
        cartItems.splice(itemIndex, 1); // Remove item from the list
      } else {
        cartItems[itemIndex].quantity = newQuantity;
        cartItems[itemIndex].price = (price / quantity) * newQuantity;
      }
      localStorage.setItem("items", JSON.stringify(cartItems));
    }
  }

  return (
    <div className="cart-item">
      <img src={item.img} alt="Item" className="cart-img" />
      <div className="cart-item-name">
        <h3>{item.name}</h3>
        <div id="cart-item-quantity">
          <label htmlFor="quantity-cart" className="cart-label">
            Quantity
          </label>
          <input
            type="number"
            className="quantity-cart quantity-input"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          ></input>
          <button className="delete-btn" onClick={handleDeleteButtonClick}>
            Delete Item
          </button>
        </div>
      </div>
      <h4>SAR {price.toFixed(2)}</h4>
    </div>
  );
}
