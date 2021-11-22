import Image from "next/image";
import styles from "./modal.module.css";

function Modal(props) {
	return (
		<div className={styles.container}>
			<Image
				alt="fileImage"
				src={props.src}
				layout="fill"
				objectFit="contain"
			/>
		</div>
	);
}

export default Modal;
