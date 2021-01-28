import Head from 'next/head';

const Layout = ({ children, title = 'Sigma Media' }) => {
	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</main>
	);
};

export default Layout;
