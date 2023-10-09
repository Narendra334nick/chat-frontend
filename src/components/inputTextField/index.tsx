type propType = {
	value: string;
	placeHolder: string;
	onChnage: any;
	label: string;
	type?: string;
	name: string;
	touched?: any;
	errors?: any;
	borderBottom?: boolean;
};
export default function index(props: propType) {
	const {
		label,
		placeHolder,
		onChnage,
		value,
		type = "text",
		name,
		errors,
		touched,
	} = props;
	const style: any = {
		width: "100%",
		fontSize: "12px",
	};
	// for getting the message based on error/touched
	const getErrorMessage = () => {
		if (touched && errors) return errors;
		return undefined;
	};
	const getErrorMessageStyle = () => {
		if (touched && value === "") return { ...style, color: "orange" };
		if (touched && errors) return { ...style, color: "red" };
		//if(touched) return {...errorMessageStyle,color:'green'}
		return style;
	};
	return (
		<div>
			<label htmlFor="username">{label}</label>
			<input
				type={type}
				placeholder={placeHolder}
				id="username"
				onChange={onChnage}
				value={value}
				name={name}
			/>
			{getErrorMessage() && (
				<div style={getErrorMessageStyle()}>{getErrorMessage()}</div>
			)}
		</div>
	);
}
