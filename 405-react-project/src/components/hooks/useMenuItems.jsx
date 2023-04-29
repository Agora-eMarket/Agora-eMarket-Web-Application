import { useEffect, useState } from "react";

function useMenuItems() {
  const [dairyEggsData, setDairyEggsData] = useState([]);
  const [fruitsVegetablesData, setFruitsVegetablesData] = useState([]);
  useEffect(() => {
    const fetchMenu = async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "http://localhost/menu.php?category=all",
          requestOptions
        );
        const result = await response.json();
        const dairyEggs = result.filter(
          (item) => item.category === "Dairy" || item.category === "Eggs"
        );
        setDairyEggsData(dairyEggs);
        const fruitsVegetables = result.filter(
          (item) => item.category === "Fruits" || item.category === "Vegetables"
        );
        setFruitsVegetablesData(fruitsVegetables);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchMenu();
  }, []);

  return {
    dairyEggsData,
    fruitsVegetablesData,
  };
}

export default useMenuItems;
