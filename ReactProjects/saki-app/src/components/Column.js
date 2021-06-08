import React from "react";
import "./column.css";

export default function Column(props) {
	function Text(props) {
		return (
			<div
				className={`col-text-container flex flex-col items-center z-10 ${props.sposition} ${props.kposition} ${props.iposition}`}
			>
				<h1 className={`letter leading-tight ${props.lettertransparent}`}>
					{props.letter}
				</h1>
				<p className={`description pl-6 pr-6 ${props.paddingsmall}`}>
					{props.description}
				</p>
			</div>
		);
	}

	function Number(props) {
		return (
			<div className="col-number-container pb-9 pl-4 z-10 font-medium">
				<h2 className="number">{props.number}</h2>
			</div>
		);
	}

	return (
		<div
			className={`column-container container h-screen grid items-end overflow-hidden relative ${props.borderleft} ${props.blackbg}`}
		>
			<div className="absolute top-0 -right-96">{props.slot}</div>
			<Text
				letter={props.letter}
				description={props.description}
				paddingsmall={props.paddingsmall}
				sposition={props.sposition}
				kposition={props.kposition}
				iposition={props.iposition}
				lettertransparent={props.lettertransparent}
			/>
			<Number number={props.number} />
		</div>
	);
}
