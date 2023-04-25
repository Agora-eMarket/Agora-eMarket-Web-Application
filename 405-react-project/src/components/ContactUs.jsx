import React from "react";

function ContactUs() {
  return (
    <>
      <form className="container blue--wrapper" id="contact-us">
        <h2 className="head">
          Contact <span className="black">Us</span>
        </h2>
        <p className="contactUs-p">We would love to hear from you</p>
        <div className="contactUs--form">
          <label className="contact--label" htmlFor="contact-name">
            Name
          </label>
          <input
            type="text"
            className="contact--input"
            name="contact-name"
            id="contact-name"
            placeholder="John Doe"
          />

          <label className="contact--label" htmlFor="contact-email">
            Email<span className="required"> *</span>
          </label>
          <input
            type="email"
            className="contact--input"
            name="contact-email"
            id="contact-email"
            placeholder="johndoe@example.com"
            required
          />

          <label className="contact--label" htmlFor="contact-number">
            Phone number
          </label>
          <input
            type="tel"
            className="contact--input"
            name="contact-number"
            id="contact-number"
            pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
            placeholder="0505111567"
          />

          <label
            className="contact--label contact-message"
            htmlFor="contact-message"
          >
            Message<span className="required"> *</span>
          </label>
          <textarea
            name="contact-message"
            id="contact-message"
            className="contact--input"
            cols="50"
            rows="10"
            placeholder="Leave your message here ;)"
            required
          ></textarea>

          <button className="contactUs-btn">Send Message</button>
        </div>
      </form>
    </>
  );
}
export default ContactUs;
