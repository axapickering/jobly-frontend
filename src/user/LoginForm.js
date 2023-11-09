import userContext from "../context/userContext";
import { useState } from "react";

function LoginForm({ login }) {

  const formStyle = { width: '200px' };

  const [formData, setFormData] = useState({ username: "", password: "" });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldData => ({ ...oldData, [name]: value }));
    console.log("formdata",formData)
  }

  function handleLogin(evt) {
    evt.preventDefault();
    login(formData);
    setFormData({ username: "", password: "" });
  }

  return (
        <div style={formStyle}>
          <form onSubmit={handleLogin}>

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

            <button type="submit" className="btn btn-primary mt-3">Submit</button>

          </form>
        </div>

  );


}

export default LoginForm;