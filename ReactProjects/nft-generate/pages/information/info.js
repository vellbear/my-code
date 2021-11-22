import Head from "next/head";
import Link from "next/link";

function info() {
	return (
		<>
			<Head>
				<title>Information</title>
			</Head>
			<h1>Information</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nemo
				tenetur molestias sequi, aliquam neque a ipsa nihil fugiat odit
				reprehenderit autem aliquid incidunt aut porro veritatis. Esse, deleniti
				quia.
			</p>
			<Link href="/">
				<a>back to home</a>
			</Link>
		</>
	);
}

export default info;
