import React from "react";
import "./Button";
import Button from "./Button";
import logo from "../assets/images/logo-bookmark.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";

export default function Navbar(props) {
	function NavItem(props) {
		return (
			<li className={`pl-12 cursor-pointer hover:text-highlight`}>
				{props.navtext}
			</li>
		);
	}

	return (
		<>
			{props.navdefault ? (
				<>
					<div className="flex absolute items-center relative">
						<div className="flex ml-40 cursor-pointer">
							<img src={logo} alt="" />
						</div>
						<div className="flex absolute items-center right-0">
							<ul className="flex text-secondary text-sm">
								<NavItem navtext={props.navtextOne} />
								<NavItem navtext={props.navtextTwo} />
								<NavItem navtext={props.navtextThree} />
							</ul>
							<div className="pl-12 mr-40">
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
						</div>
					</div>
				</>
			) : (
				<>
					<div className="flex absolute items-center relative p-12 text-white bg-secondary">
						<div className="flex absolute items-center left-0 w-full">
							<div className="flex ml-40 cursor-pointer">
								<img className="fill-current text-white" src={logo} alt="" />
							</div>
							<ul className="flex text-white text-sm">
								<NavItem navtext={props.navtextOne} />
								<NavItem navtext={props.navtextTwo} />
								<NavItem navtext={props.navtextThree} />
							</ul>
							<div className="flex absolute right-40">
								<span className="pr-10">
									<img src={iconFacebook} alt="" />
								</span>
								<img src={iconTwitter} alt="" />
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}

Navbar.defaultProps = {
	navdefault: true,
	brand: "BOOKMARK",
	text: "LOGIN",
	bgcolor: "bg-highlight",
	hovercolor: "hover:text-highlight",
	bghovercolor: "hover:bg-white",
	bordercolor: "border-highlight",
	hoverbordercolor: "hover:border-highlight",
};
