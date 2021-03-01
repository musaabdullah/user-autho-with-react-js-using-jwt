import React, { useState } from "react";
import axios from "axios";


function Register() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   const [error, setError] = useState({email: "", password: ""});

  const registerPost = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.post('signup', {email, password})
       
          console.log(res);
          if(res.data.errors){
              setError(res.data.errors);
          }

      } catch (error) {
          console.log(error.message);
      }
      
  }
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2>Register form</h2>
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
                {error && <p className="text-danger">{error.email}</p>}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  value= {password}
                  onChange = {(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-danger">{error.password}</p>}

              </div>
              <div className="container text-center mt-3">
                <button onClick={registerPost} className="btn btn-primary">Register</button>
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

export default Register;
