import React from "react";
import "./SignUpStyle.css";
import SignUp from "./SignUp";
import { Route, Routes } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
})
function handleChange(event) {
  const { name, value, type, checked } = event.target
  setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
  }))
}
function handleSubmit(event) {
  event.preventDefault()
  if (formData.password === "12345") {
      console.log("Successfully signed in")
  } else {
      console.log("Passwords or email is wrong")
      return
  }

}
  return (
    <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                
                
                <label htmlFor="email" className="form--label">Email</label>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <label htmlFor="password" className="form--label">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <a href="/Register" className="form--link">Don't have an account? SignUp here</a>
                <button
                    className="form--submit"
                >
                    Sign in
                </button>
            </form>
        </div>
  );
}

export default SignIn;
