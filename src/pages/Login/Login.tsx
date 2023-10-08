import React from "react";
import styles from "./login.module.css";
import useAuthService from "../../hooks/useAuthService";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const authService = useAuthService();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    authService.setUserDetails(true);
    navigate("/chat");
  };
  return (
    <div className={styles.mainBackground}>
      <div className={styles.background}></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
