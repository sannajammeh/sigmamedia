/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import MobileMenuPortal from '../components/organisms/MobileMenu';
import Navbar from '../components/molecules/Navbar';
import GlobalStyle from '../theme/globalstyle';
import Head from 'next/head';
import theme from '../theme';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://css.gg/menu-right-alt.css"
					rel="stylesheet"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Navbar />
				<Component {...pageProps} />
				<MobileMenuPortal />
			</ThemeProvider>
		</>
	);
}
