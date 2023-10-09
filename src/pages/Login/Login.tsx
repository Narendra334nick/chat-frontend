import React from "react";
import styles from "./login.module.css";
import useAuthService from "../../hooks/useAuthService";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/apiServices";
import axios from "axios";

function Login() {
	const navigate = useNavigate();
	const authService = useAuthService();
	const handleSubmit = async (event: any) => {
		try {
			event.preventDefault();
			const payload = {
				email: "recs.cse1626@gmail.com",
				password: "Nerd@0604",
			};
			//const user = await login(payload);
			const user = await axios({
				method: "post",
				url: "http://localhost:8086/v1/login/basic",
				data: payload,
			});
			console.log("user", user);
			authService.setUserDetails(true);
			navigate("/chat");
		} catch (error) {
			console.log("error in handle submit", error);
		}
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
