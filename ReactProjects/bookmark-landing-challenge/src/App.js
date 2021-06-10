import React from "react";
import "./components/css/App.css";
import Section from "./components/Section";
import Newsletter from "./components/Newsletter";
import Navbar from "./components/Navbar";
import heroIllustration from "./assets/images/illustration-hero.svg";
import featureOne from "./assets/images/illustration-features-tab-1.svg";
import featureTwo from "./assets/images/illustration-features-tab-2.svg";
import featureThree from "./assets/images/illustration-features-tab-3.svg";
import FAQ from "./components/FAQ";
import Button from "./components/Button";
import SectionSelect from "./components/SectionSelect";
import Card from "./components/Card";
import logoChrome from "./assets/images/logo-chrome.svg";
import logoFirefox from "./assets/images/logo-firefox.svg";
import logoOpera from "./assets/images/logo-opera.svg";

function App() {
	return (
		<div id="app" className="mt-10">
			<Navbar
				navtextOne="FEATURES"
				navtextTwo="PRICING"
				navtextThree="CONTACT"
			/>
			<Section
				default={false}
				title="A Simple Bookmark Manager"
				titlesize="text-lg"
				description="A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free."
				image={heroIllustration}
				oneButton={false}
				firstbutton="Get it on Chrome"
				secondbutton="Get it on Firefox"
				hovercolor="hover:text-secondary"
				hoverbordercolor="hover:border-secondary"
			/>
			<div className="pt-20 pb-20">
				<Section
					title="Features"
					description="Our aim is to make it quick and easy for you to access your favourite websites. 
				Your bookmarks sync between your devices so you can access them on the go."
				/>
			</div>
			<div className="h-large">
				<SectionSelect
					slotOne={
						<Section
							default={false}
							title="Bookmark in one click"
							description="Organize your bookmarks however you like. Our simple drag-and-drop interface
						gives you complete control over how you manage your favourite sites."
							image={featureOne}
							imageLeft={true}
							firstbutton="More Info"
						/>
					}
					slotTwo={
						<Section
							default={false}
							title="Intelligent search"
							description=" Our powerful search feature will help you find saved sites in no time at all.
						No need to trawl through all of your bookmarks."
							image={featureTwo}
							imageLeft={true}
							firstbutton="More Info"
						/>
					}
					slotThree={
						<Section
							default={false}
							title="Share your bookmarks"
							description="Easily share your bookmarks and collections with others. Create a shareable
						link that you can send at the click of a button."
							image={featureThree}
							imageLeft={true}
							firstbutton="More Info"
						/>
					}
				/>
			</div>

			<div className="pt-20 pb-20">
				<Section
					title="Download the extension"
					description="We’ve got more browsers in the pipeline. Please do let us know if you’ve 
				  got a favourite you’d like us to prioritize."
				/>
			</div>
			<div className="flex justify-center">
				<Card
					logo={logoChrome}
					title="Add to Chrome"
					subtitle="Minimun version 62"
				/>
				<Card
					offset="mt-8"
					logo={logoFirefox}
					title="Add to Firefox"
					subtitle="Minimun version 55"
				/>
				<Card
					offset="mt-16"
					logo={logoOpera}
					title="Add to Opera"
					subtitle="Minimum version 46"
				/>
			</div>
			<div className="pt-20">
				<Section
					title="Frequently Asked Questions"
					description="Here are some of our FAQs. If you have any other questions you’d like 
				  answered please feel free to email us."
				/>
			</div>
			<div className="pt-10">
				<FAQ
					bordertop="border-t-2"
					question="What is a Bookmark?"
					answer=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
				  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
				/>
				<FAQ
					question="How can I request a new browser?"
					answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
				  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
				  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
				  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
				/>
				<FAQ
					question="Is there a mobile app?"
					answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
				  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
				  sollicitudin ex et ultricies bibendum."
				/>
				<FAQ
					question="What about other Chromium browsers?"
					answer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
				  vitae neque eget nisl gravida pellentesque non ut velit."
				/>
			</div>
			<div className="flex justify-center mt-16 mb-40">
				<Button text="More Info" />
			</div>
			<Newsletter />
			<Navbar
				navdefault={false}
				navtextOne="FEATURES"
				navtextTwo="PRICING"
				navtextThree="CONTACT"
			/>
		</div>
	);
}

export default App;
