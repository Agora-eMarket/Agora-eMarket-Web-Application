import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import OrderItems from "./OrderItems.jsx";
import useOrders from "./hooks/useOrders.jsx";

function Orders() {
  const { items, selectedOrderId, handleToggle } = useOrders();
  if (items === null) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div id="page-container">
        <div id="orders-container">
          <h1>Order History</h1>
          {items.map((item) => (
            <OrderItems
              handleToggle={handleToggle}
              selectedOrderId={selectedOrderId}
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
