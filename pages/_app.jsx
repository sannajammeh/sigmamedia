/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import MobileMenuPortal from '../components/organisms/MobileMenu';
import Navbar from '../components/molecules/Navbar';
import GlobalStyle from '../theme/globalstyle';
import Head from 'next/head';
import theme from '../theme';
import Footer from '../components/molecules/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function App({ Component, pageProps }) {
	const { pathname } = useRouter();
	const navbarRef = useRef();
	const showFooter = pathname !== '/elements' && !pathname.includes('/demos');
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
				<Navbar ref={navbarRef} />
				<Component {...pageProps} navbarRef={navbarRef} />
				{showFooter && <Footer />}
				<MobileMenuPortal />
			</ThemeProvider>
		</>
	);
}
