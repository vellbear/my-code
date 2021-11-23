import React from "react";
import Section from "./Section";
import Input from "./Input";
import Button from "./Button";

export default function Newsletter(props) {
	return (
		<div className="pt-14 pb-20 bg-tertiary">
			<Section
				title="Stay up-to-date with what we're doing"
				description="3 5 , 0 0 0 + &nbsp;&nbsp;A L R E A D Y  &nbsp;&nbsp;J O I N E D"
				titlecolor="text-white"
				descriptioncolor="text-white"
				descriptionsize="text-xs"
				bgcolor="bg-tertiary"
				titlelast={true}
				width="w-medium"
				slot={
					<div className="flex pt-8">
						<span className="pr-4">
							<Input />
						</span>
						<Button
							default={false}
							text={props.text}
							bgcolor={props.bgcolor}
							hovercolor={props.hovercolor}
							bghovercolor={props.bghovercolor}
							bordercolor={props.bordercolor}
							hoverbordercolor={props.hoverbordercolor}
						/>
					</div>
				}
			/>
		</div>
	);
}

Newsletter.defaultProps = {
	text: "Contact Us",
	bgcolor: "bg-highlight",
	hovercolor: "hover:text-highlight",
	bghovercolor: "hover:bg-white",
	bordercolor: "border-highlight",
	hoverbordercolor: "hover:border-highlight",
};
