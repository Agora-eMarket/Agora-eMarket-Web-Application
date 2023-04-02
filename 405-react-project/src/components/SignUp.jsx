import React from "react";
import "./SignUpStyle.css";
export default function SignUp() {
    const [formData, setFormData] = React.useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        passwordConfirm: "",
        phone: "",
        joinedNewsletter: true
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if (formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="fname" className="form--label">First Name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    className="form--input"
                    name="fname"
                    onChange={handleChange}
                    value={formData.fname}
                />
                <label htmlFor="fname" className="form--label">Last Name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    className="form--input"
                    name="lname"
                    onChange={handleChange}
                    value={formData.lname}
                />
                <label htmlFor="fname" className="form--label">Email</label>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <label htmlFor="fname" className="form--label">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <label htmlFor="fname" className="form--label">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                <label htmlFor="fname" className="form--label">Phone</label>
                <input
                    type="text"
                    placeholder="phone"
                    className="form--input"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
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
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}