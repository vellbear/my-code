import React from "react";

export default function Paragraph(props) {
	return (
		<>
			{props.titlelast ? (
				<>
					<div
						className={`flex flex-col ${props.align} ${props.textalign} ${props.width} ${props.editParagraph}`}
					>
						<p
							className={`font-normal ${props.descriptioncolor} ${props.descriptionsize} pt-4 pb-4 ${props.editDescription}`}
						>
							{props.description}
						</p>
						<h1
							className={`font-medium ${props.titlecolor} ${props.titlesize} pt-4 leading-tight ${props.editTitle}`}
						>
							{props.title}
						</h1>
					</div>
				</>
			) : (
				<>
					<div
						className={`flex flex-col ${props.align} ${props.textalign} ${props.width} ${props.editParagraph}`}
					>
						<h1
							className={`font-medium  ${props.titlecolor} ${props.titlesize} pt-4 leading-tight ${props.editTitle}`}
						>
							{props.title}
						</h1>
						<p
							className={`font-normal ${props.descriptioncolor} text-base pt-4 pb-4 ${props.editDescription}`}
						>
							{props.description}
						</p>
					</div>
				</>
			)}
		</>
	);
}

Paragraph.defaultProps = {
	align: "items-center",
	textalign: "text-center",
	titlesize: "text-md",
	width: "w-default",
	titlecolor: "text-secondary",
	descriptioncolor: "text-primary",
	descriptionsize: "text-base",
};
