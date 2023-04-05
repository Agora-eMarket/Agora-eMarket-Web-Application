import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpStyle.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    joinedNewsletter: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.passwordConfirm) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        mobile: formData.phone,
        password: formData.password,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = await fetch(
        "http://localhost/register.php",
        requestOptions
      );
      const result = await response.json();

      if (result.success) {
        navigate("/login");
      } else {
        alert("Account Already Exists");
      }
    } else {
      console.log("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          <a href="/">
            <span className="form-title">Create</span> an account
          </a>
        </h1>
        <label htmlFor="fname" className="form--label">
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="form--input"
          name="fname"
          onChange={handleChange}
          value={formData.fname}
          required
        />
        <label htmlFor="fname" className="form--label">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="form--input"
          name="lname"
          onChange={handleChange}
          value={formData.lname}
        />
        <label htmlFor="fname" className="form--label">
          Email
        </label>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <label htmlFor="fname" className="form--label">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <label htmlFor="fname" className="form--label">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
          required
        />
        <label htmlFor="fname" className="form--label">
          Phone
        </label>
        <input
          type="number"
          placeholder="phone"
          className="form--input"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          required
        />
        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinedNewsletter"
            onChange={handleChange}
            checked={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
        <a className="registerLink" href="/login">
          Already got an account?
        </a>
      </form>
    </div>
  );
}
