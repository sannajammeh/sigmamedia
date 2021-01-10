import Head from 'next/head';
const Icon = ({ name }) => {
	return (
		<>
			<Head>
				<link href={`https://css.gg/${name}.css`} rel="stylesheet" />
			</Head>
			<i className={`gg-${name}`} />
		</>
	);
};

export default Icon;
