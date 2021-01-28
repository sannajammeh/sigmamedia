import Head from 'next/head';
import Layout from '../components/atoms/Layout';
import FeatureWalkthrough from '../components/templates/FeatureWalkthrough';
import Hero from '../components/templates/Hero';
import Services from '../components/templates/Services';
import Solution from '../components/templates/Solution';

export default function Home() {
	return (
		<Layout title="Sigma Media">
			<Hero />
			<FeatureWalkthrough />
			<Services />
			<Solution />
		</Layout>
	);
}
