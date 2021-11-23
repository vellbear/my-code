import React from "react";

export default function Button(props) {
	return (
		<>
			<button
				className={`rounded-md border-2 h-input min-w-button pl-4 pr-4 ${props.textcolor} ${props.bordercolor} ${props.bgcolor} ${props.hovercolor} ${props.hoverbgcolor} ${props.hoverbordercolor} text-sm font-medium`}
			>
				{props.text}
			</button>
		</>
	);
}

Button.defaultProps = {
	text: "Button",
	textcolor: "text-white",
	bordercolor: "border-tertiary",
	bgcolor: "bg-tertiary",
	hovercolor: "hover:text-tertiary",
	hoverbgcolor: "hover:bg-white",
	hoverbordercolor: "hover:border-tertiary",
};
