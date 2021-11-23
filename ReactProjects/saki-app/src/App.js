import "./App.css";
import Column from "./components/Column";
import smoke from "./assets/smoke.mp4";

function App() {
	return (
		<div id="app" className="h-screen grid grid-cols-4">
			<div className="menu-icon absolute cursor-pointer right-14 top-7 z-50">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="32px"
					viewBox="0 0 24 24"
					width="32px"
					fill="#000000"
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
				</svg>
			</div>
			<Column
				letter="S"
				description="Authentic new, preloved and vintage luxary women's clothing"
				number="01"
				paddingsmall="padding-small"
				sposition="s-position"
			/>
			<Column
				letter="A"
				number="02"
				blackbg="black-bg"
				lettertransparent="letter-transparent"
				slot={
					//Video by Engin Akyurt from Pexels
					<video
						className="smoke-video z-0"
						src={smoke}
						type="video/mp4"
						autoPlay
						loop
						muted
					></video>
				}
			/>
			<Column
				letter="K"
				description="Discover pre-owned Designer Clothing for Men"
				number="03"
				kposition="k-position"
			/>
			<Column
				letter="I"
				number="04"
				borderleft="border-left"
				iposition="i-position"
			/>
		</div>
	);
}

export default App;
