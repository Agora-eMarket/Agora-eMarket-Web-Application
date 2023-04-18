import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function AboutUs() {
  return (
    <>
      <div className="container" id="about-us">
        <h2 className="head-inverse">
          <span className="form-title">About</span> Us
        </h2>
        <p className="aboutUs-p">
          Welcome to Agora, your go-to supermarket for all your grocery needs.
          At Agora, we believe that shopping for groceries should be convenient,
          affordable, and enjoyable. That's why we offer a wide range of
          high-quality products at competitive prices, and strive to provide
          exceptional customer service.
          <br /> <br />
          Our mission is to make grocery shopping easy and hassle-free for our
          customers. We source our products from trusted suppliers and ensure
          that they meet our strict standards for quality, freshness, and
          sustainability. Whether you're looking for fresh produce, meat, dairy,
          or pantry staples, we've got you covered.
          <br /> <br />
          At Agora, we value our customers and are committed to providing a
          positive shopping experience. Our friendly and knowledgeable staff are
          always available to assist you with any questions or concerns you may
          have. We also offer a range of services, including online ordering,
          home delivery, and in-store pickup, to make shopping with us even more
          convenient.
        </p>
        <div className="features-container">
          <div className="features">
            <FontAwesomeIcon icon={faLeaf} size="2xl" className="logo-img-1" />
            <p className="features-p form-title">Always Fresh</p>
          </div>
          <div className="features">
            <FontAwesomeIcon
              icon={faTruckFast}
              size="2xl"
              className="logo-img-2"
            />
            <p className="features-p form-title">Always Fast</p>
          </div>
          <div className="features">
            <FontAwesomeIcon icon={faClock} size="2xl" className="logo-img-3" />
            <p className="features-p form-title">Always Available</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
