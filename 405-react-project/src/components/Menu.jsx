import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import data from "./Dairy&EggsData";
import Contact from "./Contact";
import FruitsVegetablesData from "./Fruits&VegetablesData.jsx";
function Menu() {
  const dataElement = data.map((data) => {
    return <Contact key={data.id} props={data} />;
  });
  const FruitsVegetables = FruitsVegetablesData.map((FruitsVegetablesData) => {
    return (
      <Contact key={FruitsVegetablesData.id} props={FruitsVegetablesData} />
    );
  });
  return (
    <>
      <Navbar />
      <div className="food-type">
        <h1 className="type">Dairy & Eggs</h1>
        <section className="card-list">{dataElement}</section>
      </div>
      <div className="divider "></div>
      <div className="food-type">
        <h1 className="type">Fruits & Vegetables</h1>
        <section className="card-list">{FruitsVegetables}</section>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
