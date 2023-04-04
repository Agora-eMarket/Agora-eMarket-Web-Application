import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpStyle.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch("http://localhost/login.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.success);
        if (result.success) {
          console.log(result);
          navigate("/menu");
        } else {
          alert(result.message);
        }
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          <a href="/">
            <span className="form-title">Sign</span> in
          </a>
        </h1>
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
        <button className="form--submit">Sign in</button>
        <a className="registerLink" href="/register">
          Don't have an account?
        </a>
      </form>
    </div>
  );
}
