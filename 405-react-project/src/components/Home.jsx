import React from "react";
import Header from "./Header.jsx";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <div className="flex">
        <AboutUs />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default Home;
