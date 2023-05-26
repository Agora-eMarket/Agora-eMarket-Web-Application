import React from "react";

function useOrders() {
  const [items, setItems] = React.useState(null);
  const [selectedOrderId, setSelectedOrderId] = React.useState(null);

  const handleToggle = (orderId) => {
    if (selectedOrderId === orderId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(orderId);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          `http://localhost/getOrders.php?email=${localStorage.getItem(
            "email"
          )}`,
          requestOptions
        );
        const result = await response.json();
        setItems(result);
      } catch (e) {
        alert("Oops, Something went wrong.");
      }
    };
    fetchData();
  }, []);

  return {
    items,
    selectedOrderId,
    handleToggle,
  };
}

export default useOrders;
