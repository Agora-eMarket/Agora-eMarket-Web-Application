import React from "react";
import dollarSign from "./dollar-sign.png";
export default function Contact({ props }) {
  // const [counter, setCounter] = React.useState(0);

  // //increase counter
  // const increase = () => {
  //   setCounter((count) => count + 1);
  // };
  // //decrease counter
  // const decrease = () => {
  //   if (counter > 0) {
  //     setCounter((count) => count - 1);
  //   }
  // };
  //reset counter
  const addCart = () => {
    console.log(props.name, " has been added to cart");
  };
  return (
    <div className="contact-card">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div className="info-group" id="inf">
        <p>{props.discreption}</p>
      </div>
      <div className="info-group">
        <img src={dollarSign} alt="" />
        <p>{props.price} SAR </p>
      </div>
      <div className="flex">
        <button
          className="add-btn"
          //   style={{ marginRight: "10px" }}
          onClick={addCart}
        >
          Add to cart
        </button>
        <input type="number" className="quantity" min="1"></input>
        {/* <button className="contact-card-btn" onClick={decrease}>
          -
        </button>
        <p>{counter}</p>
        <button className="contact-card-btn" onClick={increase}>
          +
        </button> */}
      </div>
      {/* <h1 style={{display: props.num ? 'block' : 'none'}}>{1 + props.num}</h1> */}
    </div>
  );
}