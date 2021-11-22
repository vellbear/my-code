import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./sandbox.module.css";
import ReactDOM from "react-dom";

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
				id="previewImage"
				className={styles.previewImageContainer}
				key={images[i].size + images[i].lastModified}
			>
				<Image
					alt="fileImage"
					src={URL.createObjectURL(images[i])}
					layout="fill"
					objectFit="cover"
				/>
			</div>
		);
		allFileImages[i] = fileImage;
	}
	{
		/*Renders all of the images into a preview window*/
	}
	ReactDOM.render(allFileImages, document.getElementById("previewContainer"));
}

export default sandbox;
