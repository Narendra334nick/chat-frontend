import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import InputTextField from "../../../components/inputTextField";
import { createUser, updateUser } from "../../../services/apiServices";

export default function UserComponent(props: any) {
	return (
		<div>
			<FormikHoc {...props} />
		</div>
	);
}

const userForm = (props: any) => {
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
			<div>
				<div>
					<h3>Craete User</h3>

					<InputTextField
						value={values?.firstName}
						placeHolder="First Name"
						onChnage={change.bind(null, "firstName")}
						label="First Name"
						type="text"
						name="firstName"
						touched={touched.firstName}
						errors={errors.firstName}
					/>

					<InputTextField
						value={values?.lastName}
						placeHolder="Last Name"
						onChnage={change.bind(null, "lastName")}
						label="Last Name"
						type="text"
						name="lastName"
						touched={touched.lastName}
						errors={errors.lastName}
					/>
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

					<button type="submit" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

const FormikHoc = (props: any) => {
	const { handleClose, userEdit } = props;
	const LoginFormikLogin = withFormik({
		mapPropsToValues: () => ({
			id: userEdit?.id ? userEdit?.id : undefined,
			firstName: userEdit?.firstName ? userEdit?.firstName : undefined,
			lastName: userEdit?.lastName ? userEdit?.lastName : undefined,
			username: userEdit?.email ? userEdit?.email : undefined,
			password: userEdit?.password ? userEdit?.password : undefined,
		}),

		// Custom sync validation
		validationSchema: Yup.object({
			username: Yup.string().required(),
			password: Yup.string().required(),
			firstName: Yup.string().required(),
			lastName: Yup.string().required(),
		}),
		handleSubmit: async (values: any) => {
			try {
				if (values?.id) {
					const payload = {
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.username,
						password: values.password,
						id: values.id,
					};
					const resp = await updateUser(payload);
					if (resp?.data) {
						handleClose();
					}
				} else {
					const payload = {
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.username,
						password: values.password,
					};
					const resp = await createUser(payload);
					if (resp?.data) {
						handleClose();
					}
				}
			} catch (error) {
				console.log("Error in handle submit", error);
			}
		},
		displayName: "userForm",
	})(userForm);

	return <LoginFormikLogin {...props} />;
};
