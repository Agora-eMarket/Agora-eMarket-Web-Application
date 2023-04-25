import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Contact from "./Contact";
function Menu() {
  const [dairyEggsData, setDairyEggsData] = React.useState([]);
  const [fruitsVegetablesData, setFruitsVegetablesData] = React.useState([]);

  React.useEffect(() => {
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

  const dairyEggs = dairyEggsData.map((item) => {
    return <Contact key={item.id} props={item} />;
  });

  const fruitsVegetables = fruitsVegetablesData.map((item) => {
    return <Contact key={item.id} props={item} />;
  });
  return (
    <>
      <Navbar />
      <div className="food-type">
        <h1 className="type">Dairy & Eggs</h1>
        <section className="card-list">{dairyEggs}</section>
      </div>
      <div className="divider "></div>
      <div className="food-type">
        <h1 className="type">Fruits & Vegetables</h1>
        <section className="card-list">{fruitsVegetables}</section>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
