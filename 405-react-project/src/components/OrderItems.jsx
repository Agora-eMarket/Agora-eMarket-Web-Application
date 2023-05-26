import React from "react";

function OrderItems({ data, selectedOrderId, handleToggle }) {
  const itemsArray = Object.values(data.items);
  const order_details =
    data.id === selectedOrderId ? "order-details-show" : "order-details-hide";
  return (
    <>
      <div className="order" onClick={() => handleToggle(data.id)}>
        <p>Order# {data.id}</p>
        <p>Total Cost: SAR {data.totalPrice}</p>
        <p>Status: {data.status}</p>
      </div>
      <div className={order_details}>
        {data.id === selectedOrderId &&
          itemsArray.map((item, index) => (
            <div className="order-item" key={index}>
              <div>
                <img src={item.img} alt="" />
                <div id="item-nameQnt">
                  <p id="item-name">{item.name}</p>
                  <p id="item-quantity">Qnt: {item.quantity}</p>
                </div>
              </div>
              <p id="item-price">SAR {item.price.toFixed(2)}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default OrderItems;
