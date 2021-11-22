import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./sandbox.module.css";
import ReactDOM from "react-dom";
import ImageModal from "../../components/Modal";
/*NOTE: Fix Modal */
function sandbox() {
	return (
		<>
			<Head>
				<title>Sandbox</title>
			</Head>
			<Link href="/">
				<a>back to home</a>
			</Link>
			<h1>Sandbox</h1>
			<div>
				<input
					className="imageUpload"
					type="file"
					accept="/image*"
					onChange={renderImage}
					multiple
				/>
				<div id="previewContainer" className={styles.previewContainer}></div>
			</div>
		</>
	);
}

function renderImage() {
	const images = document.getElementsByClassName("imageUpload")[0].files;
	const allFileImages = [];
	for (var i = 0; i < images.length; i++) {
		{
			/*Creates a Image element for every file*/
		}
		const fileImage = (
			<div
				className={styles.previewImageContainer}
				key={images[i].size + images[i].lastModified}
				onMouseEnter={() => {
					showModal(i);
				}}
				onMouseLeave={() => {
					hideModal(i);
				}}
			>
				<Image
					alt="fileImage"
					src={URL.createObjectURL(images[i])}
					layout="fill"
					objectFit="cover"
				/>
				<ImageModal src={URL.createObjectURL(images[i])} />
			</div>
		);
		allFileImages[i] = fileImage;
	}
	{
		/*Renders all of the images into a preview window*/
	}
	ReactDOM.render(allFileImages, document.getElementById("previewContainer"));
}

function showModal(index) {
	document.getElementsByClassName(styles.previewImageContainer)[
		index
	].children[1].style.display = "block";
}

function hideModal(index) {
	document.getElementsByClassName(styles.previewImageContainer)[
		index
	].children[1].style.display = "none";
}

export default sandbox;
