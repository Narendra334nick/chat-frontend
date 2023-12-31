import React from "react";
import styles from "./login.module.css";
import useAuthService from "../../hooks/useAuthService";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/apiServices";

import { withFormik } from "formik";
import * as Yup from "yup";
import InputTextField from "../../components/inputTextField";
import { saveToLocalStore } from "../../services/storege";
import constants from "../../constant/constant";

export default function LoginComponent(props: any) {
	return (
		<div>
			<FormikHoc {...props} />
		</div>
	);
}

const loginForm = (props: any) => {
	const {
		values,
		touched,
		errors,
		handleChange,
		setFieldTouched,
		//setFieldValue,
		handleSubmit,
	} = props;
	const change = (
		name: any,
		e: React.ChangeEvent<HTMLInputElement>,
		index: any
	) => {
		e.persist();
		handleChange(e);
		setFieldTouched(name, true, false);
	};

	// const handleGeneralChange = (value: any, id: any) => {
	// 	setFieldValue(id, value);
	// 	setFieldTouched(id, true, false);
	// };

	return (
		<>
			<div className={styles.mainBackground}>
				<div className={styles.background}></div>
				<form onSubmit={handleSubmit}>
					<h3>Login Here</h3>
					<InputTextField
						value={values?.username}
						placeHolder="user name"
						onChnage={change.bind(null, "username")}
						label="Username"
						name="username"
						touched={touched.username}
						errors={errors.username}
					/>

					<InputTextField
						value={values?.password}
						placeHolder="password"
						onChnage={change.bind(null, "password")}
						label="Password"
						type="password"
						name="password"
						touched={touched.password}
						errors={errors.password}
					/>

					<button type="submit">Log In</button>
				</form>
			</div>
		</>
	);
};

const FormikHoc = (props: any) => {
  const navigate = useNavigate();
  const authService = useAuthService();
	const LoginFormikLogin = withFormik({
		mapPropsToValues: () => ({
			username: undefined,
			password: undefined,
		}),

		// Custom sync validation
		validationSchema: Yup.object({
			username: Yup.string().required(),
			password: Yup.string().required(),
		}),
		handleSubmit: async (values: any) => {
			try {
				const payload = {
					email: values.username,
					password: values.password,
				};
				const user = await login(payload);
        if(user?.data?.[0]?.accessToken){
          await saveToLocalStore(constants.access_token,user?.data?.[0]?.accessToken);
          authService.setIsLoggedIn(true);
          authService.setUserDetails(user?.data?.[0]);
          navigate('/chat')
        }
			} catch (error) {
        console.log('Error in handle submit',error);
      }
		},
		displayName: "loginForm",
	})(loginForm);

	return <LoginFormikLogin {...props} />;
};
