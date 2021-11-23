import React from "react";
import Paragraph from "./Paragraph";
import Button from "./Button";

export default function Section(props) {
	return (
		<>
			{props.default ? (
				<section className={`flex flex-col items-center ${props.bgcolor}`}>
					<Paragraph
						title={props.title}
						description={props.description}
						titlecolor={props.titlecolor}
						descriptioncolor={props.descriptioncolor}
						titlelast={props.titlelast}
						descriptionsize={props.descriptionsize}
						width={props.width}
					/>
					<>{props.slot}</>
				</section>
			) : (
				<section className="xl:grid xl:grid-cols-2 flex flex-col items-center">
					{props.imageLeft ? (
						<>
							<div className="flex xl:justify-end">
								<img className="pt-20" src={props.image} alt="" />
							</div>
							<div className="flex flex-col justify-center items-center">
								<Paragraph
									title={props.title}
									description={props.description}
									align="xl:items-left items-center"
									textalign="xl:text-left text-center"
									titlesize={props.titlesize}
									width="w-medium"
								/>
								<div className="flex xl:justify-start justify-center pt-6 w-medium">
									{props.oneButton ? (
										<>
											<Button text={props.firstbutton} default={false} />
										</>
									) : (
										<>
											<span className="pr-4">
												<Button text={props.firstbutton} />
											</span>
											<Button text={props.secondbutton} />
										</>
									)}
								</div>
							</div>
						</>
					) : (
						<>
							<div className="flex flex-col justify-center pt-14 xl:pl-40">
								<Paragraph
									editDescription={props.editDescription}
									editTitle={props.editTitle}
									editParagraph={props.editParagraph}
									title={props.title}
									description={props.description}
									align="xl:items-left items-center"
									textalign="xl:text-left text-center"
									titlesize={props.titlesize}
								/>
								<div className="flex xl:justify-start justify-center pt-6">
									{props.oneButton ? (
										<>
											<Button text={props.firstbutton} default={false} />
										</>
									) : (
										<>
											<span className="pr-4">
												<Button text={props.firstbutton} />
											</span>
											<Button
												text={props.secondbutton}
												hovercolor={props.hovercolor}
												hoverbordercolor={props.hoverbordercolor}
											/>
										</>
									)}
								</div>
							</div>
							<div className="pl-4">
								<img className="pt-20" src={props.image} alt="" />
							</div>
						</>
					)}
				</section>
			)}
		</>
	);
}

Section.defaultProps = {
	default: true,
	oneButton: true,
};
