import { useEffect, useState } from "react";

function useCartCost() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [price, setPrice] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    var newPrice = 0;
    cartItems.forEach((item) => {
      newPrice += parseFloat(item.price);
    });
    setPrice(newPrice);

    var newVat = (newPrice * 0.15).toFixed(2);
    setVat(newVat);

    var newTotalPrice = parseFloat(newPrice) + parseFloat(newVat);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return {
    price,
    vat,
    totalPrice,
    cartItems,
    setPrice,
    setVat,
    setTotalPrice,
    setCartItems,
  };
}

export default useCartCost;
