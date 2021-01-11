import Head from 'next/head';
const Icon = ({ name, scale }) => {
	return (
		<>
			<Head>
				<link href={`https://css.gg/${name}.css`} rel="stylesheet" />
			</Head>
			<i
				className={`gg-${name}`}
				style={{ transform: scale ? `scale(${scale})` : undefined }}
			/>
		</>
	);
};

export default Icon;
