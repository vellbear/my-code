import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>NFT Generate</title>
			</Head>
			<h1>NFT GENERATE</h1>

			<Link href="/studio/sandbox">
				<a>
					<h2>Sandbox</h2>
				</a>
			</Link>

			<Link href="/information/info">
				<a>
					<h2>Information</h2>
				</a>
			</Link>
		</>
	);
}
