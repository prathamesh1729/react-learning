import React from "react";
import "./Signup.css";


export default function Signup() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        okayToEmail: false
    });

    const id = React.useId();

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData);
        if (formData.password !== formData.confirmPassword) {
            console.log("Passwords do not match!");
            return;
        }

        console.log("Successfully signed up!")
        formData.okayToEmail && console.log("Thanks for signing up for the newsletter!")
    }

    function handleChange(event) {
        const { name, value, type, checked } = event.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id={id + "-okayToEmail"}
                        type="checkbox"
                        name="okayToEmail"
                        checked={formData.okayToEmail}
                        onChange={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    );
}