import React, { useState } from "react";

export default function SectionSelect(props) {
	const [underline, setUnderline] = useState(true);
	const [underlineTwo, setUnderlineTwo] = useState(false);
	const [underlineThree, setUnderlineThree] = useState(false);
	const [showSlotOne, setshowSlotOne] = useState(true);
	const [showSlotTwo, setshowSlotTwo] = useState(false);
	const [showSlotThree, setshowSlotThree] = useState(false);

	function Selector(props) {
		return (
			<div
				className={`${props.underline} w-60 border-highlight text-center cursor-pointer`}
				onClick={props.onClick}
			>
				{props.selector}
			</div>
		);
	}

	return (
		<>
			<div className="flex justify-center">
				<div className="flex justify-center border-b-2 w-xlarge">
					<Selector
						selector={props.selectorOne}
						underline={underline ? "border-b-4" : ""}
						onClick={() => {
							setUnderline(true);
							setUnderlineTwo(false);
							setUnderlineThree(false);
							setshowSlotOne(true);
							setshowSlotTwo(false);
							setshowSlotThree(false);
						}}
					/>
					<Selector
						selector={props.selectorTwo}
						underline={underlineTwo ? "border-b-4" : ""}
						onClick={() => {
							setUnderlineTwo(true);
							setUnderline(false);
							setUnderlineThree(false);
							setshowSlotTwo(true);
							setshowSlotOne(false);
							setshowSlotThree(false);
						}}
					/>
					<Selector
						selector={props.selectorThree}
						underline={underlineThree ? "border-b-4" : ""}
						onClick={() => {
							setUnderlineThree(true);
							setUnderlineTwo(false);
							setUnderline(false);
							setshowSlotThree(true);
							setshowSlotOne(false);
							setshowSlotTwo(false);
						}}
					/>
				</div>
			</div>
			{showSlotOne && <>{props.slotOne}</>}
			{showSlotTwo && <>{props.slotTwo}</>}
			{showSlotThree && <>{props.slotThree}</>}
		</>
	);
}

SectionSelect.defaultProps = {
	selectorOne: "One",
	selectorTwo: "Two",
	selectorThree: "Three",
};
