import userContext from "../context/userContext";
import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from "react";

const initialState = {
  username: "",
  password: "",
  firstName: "",
  lastName:"",
  email:""
}

function SignupForm({ signup }) {
  const navigate = useNavigate();

  const formStyle = { width: '200px' };

  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldData => ({ ...oldData, [name]: value }));
  }

  function handleSignup(evt) {
    evt.preventDefault();
    signup(formData);
    setFormData(initialState);
    navigate("/")
  }

  return (
        <div style={formStyle}>
          <form onSubmit={handleSignup}>

            <div className="form-group">
              <label htmlFor="username" className="text-white">Username</label>
              <input className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required

              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="text-white">Password</label>
              <input type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName" className="text-white">First Name</label>
              <input type="firstName"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required

              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="text-white">Last Name</label>
              <input type="lastName"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="text-white">Email</label>
              <input type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>

          </form>
        </div>

  );


}

export default SignupForm;