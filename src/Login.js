import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import Home from './Home';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginPost = async (e) => {
    e.preventDefault();
     try {
         const res = await axios.post("login", { email, password });
         console.log(res.data);
      
     } catch(error) {
         console.log(error);
     }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2>Login form</h2>
          </div>
          <div className="card-body  p-2">
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  value = {email}
                  onChange = {(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value = {password}
                  onChange = {(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="container text-center mt-3">
                <button onClick={loginPost} className="btn btn-primary">
                  Login
                </button>
                <button className="btn btn-danger" style={{ marginLeft: 10 }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
