import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SignUpStyle.css";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromCartPage = queryParams.get("fromCartPage") === "true";

  const [isLoggedIn, setIsLoggedIn] = React.useState({
    state: localStorage.getItem("isLoggedIn") === "true" || false,
    email: localStorage.getItem("email") || "",
  });

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

  async function handleSubmit(event) {
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
    try {
      const response = await fetch(
        "http://localhost/login.php",
        requestOptions
      );
      const result = await response.json();

      if (result.success) {
        const userData = {
          isLoggedIn: result.success,
          email: formData.email,
        };
        setIsLoggedIn(userData);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("email", formData.email);
        localStorage.setItem("name", result.name);
        if (fromCartPage) {
          navigate("/Payment");
        } else {
          navigate("/menu");
        }
      } else {
        alert(result.message);
      }
    } catch (e) {
      alert(e);
    }
  }

  function handleLogout() {
    setIsLoggedIn({
      state: false,
      email: "",
    });
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
  }

  return (
    <div className="form-container">
      {isLoggedIn.state ? (
        <div>
          <p id="loggedInMessage">
            You are logged in as{" "}
            <span id="loggedInEmail">{isLoggedIn.email}</span>
          </p>
          <a className="loggedBtn" href="/">
            Home
          </a>
          <a className="loggedBtn" href="/" onClick={handleLogout}>
            Log out
          </a>
        </div>
      ) : (
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
      )}
    </div>
  );
}
