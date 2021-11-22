import React from "react";
import Button from "./Button";
import dots from "../assets/images/bg-dots.svg";

export default function Card(props) {
	return (
		<div
			className={`flex flex-col items-center ml-4 mr-4 rounded-2xl shadow-xl min-h-card h-card w-small ${props.offset}`}
		>
			<div className="pt-10">
				<img src={props.logo} alt="" />
			</div>
			<div className="text-variant font-medium text-secondary pt-6">
				{props.title}
			</div>
			<div className="text-normal text-primary pt-2">{props.subtitle}</div>
			<div className="pt-10">
				<img src={dots} alt="" />{" "}
			</div>
			<div className="pt-6 pb-6">
				<Button text={props.text} />
			</div>
		</div>
	);
}

Card.defaultProps = {
	title: "Add to Chrome",
	subtitle: "Minimum version 62",
	text: "Add & Install Extension",
};
