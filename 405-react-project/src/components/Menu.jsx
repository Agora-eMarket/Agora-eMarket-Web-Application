import React from "react";
import useMenuItems from "./hooks/useMenuItems.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Contact from "./Contact";

export default function Menu() {
  const { dairyEggsData, fruitsVegetablesData } = useMenuItems();

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
