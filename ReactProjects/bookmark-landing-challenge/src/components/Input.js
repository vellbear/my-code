import React from "react";

export default function Input(props) {
	return (
		<div>
			<input
				className={`${props.borderstyle} rounded-md h-input w-72 pl-6`}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}

Input.defaultProps = {
	type: "email",
	borderstyle: "border-none",
	placeholder: "Enter your email address",
};
