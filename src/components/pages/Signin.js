import React, { useState } from "react";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import "../login.css";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    authService
      .login(userName, password)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        alert("Invalid user name or password");
      });
  };
  const handleRegisterClick = () => {
    navigate("/signup"); 
  };

  return (
    <div className="formDiv" style={{ color: "white" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="loginUserName">User Name</label>
          <input
            type="String"
            className="form-control"
            name="loginUserName"
            id="userNameInput"
            aria-describedby="userNameHelpId"
            placeholder="user name"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            className="form-control"
            name="login-password"
            id="passInput"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
        <button
      type="button"
      onClick={handleRegisterClick}
      className="btn btn-link"
      style={{ color: 'white', textDecoration: 'underline' }}
    >
      Don't Have an Account?
    </button>
      </form>
    </div>
  );
}
