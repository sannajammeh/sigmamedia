import { useRouter } from 'next/router';
const Demo = () => {
	const router = useRouter();
	const { demoURL, id } = router.query;
	return (
		<div>
			<h2>{router.query.id}</h2>
			<iframe src={demoURL} frameBorder="0"></iframe>
		</div>
	);
};

export default Demo;
