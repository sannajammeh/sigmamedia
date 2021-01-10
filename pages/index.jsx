import Head from 'next/head';
import FeatureWalkthrough from '../components/templates/FeatureWalkthrough';
import Hero from '../components/templates/Hero';
export default function Home() {
	return (
		<>
			<Head>
				<title>Sigma Media | Tengel suger</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Hero />
				<FeatureWalkthrough />
			</main>
		</>
	);
}
