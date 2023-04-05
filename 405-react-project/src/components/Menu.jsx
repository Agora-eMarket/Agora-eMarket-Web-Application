import React from "react";
import Navbar from "./Navbar.jsx";
import data from "./chickenData";
import Contact from "./Contact";
import fishData from "./seafoodData.jsx";
import SignIn from "./SignIn";
function Menu() {
  const dataElement = data.map((data) => {
    return <Contact key={data.id} props={data} />;
  });
  const fishElement = fishData.map((fishData) => {
    return <Contact key={fishData.id} props={fishData} />;
  });
  return (
    <>
      <Navbar />
      <div className="food-type">
        <h1 className="type">Chicken</h1>
        <section className="card-list">{dataElement}</section>
      </div>
      <div className="divider "></div>
      <div className="food-type">
        <h1 className="type">SeaFood</h1>
        <section className="card-list">{fishElement}</section>
      </div>
    </>
  );
}

export default Menu;
