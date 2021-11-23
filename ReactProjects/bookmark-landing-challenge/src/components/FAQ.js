import React, { useState } from "react";
import iconArrow from "../assets/images/icon-arrow.svg";

export default function FAQ(props) {
	const [showAnswer, setshowAnswer] = useState(false);

	return (
		<div className="flex flex-col items-center">
			<div
				className={`flex flex-col justify-center border-b-2 w-large ${props.bordertop}`}
			>
				<div
					className="flex items-center relative cursor-pointer"
					onClick={() => setshowAnswer(!showAnswer)}
				>
					<div className="absoulute left-0 text-variant text-secondary hover:text-highlight mt-4 mb-4">
						{props.question}
					</div>
					<div className="absolute right-0">
						{showAnswer ? (
							<img
								className="transition-transform transform rotate-180"
								src={iconArrow}
								alt=""
							/>
						) : (
							<img
								className="transition-transform transform"
								src={iconArrow}
								alt=""
							/>
						)}
					</div>
				</div>
				{showAnswer && (
					<div className="mt-4 mb-10 text-secondary text-base">
						{props.answer}
					</div>
				)}
			</div>
		</div>
	);
}

FAQ.defaultProps = {
	question: "What is a Bookmark?",
	answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
};
