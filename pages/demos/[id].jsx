import { useRouter } from 'next/router';
import Box from '../../components/atoms/Box';
import Text from '../../components/atoms/Text';
import Button from '../../components/atoms/Button';
import Container from '../../components/atoms/Container';
import Link from '../../components/atoms/Link';
import Iframe from 'react-iframe';
import { useIsClient } from '../../hooks/client';
import styled from 'styled-components';
import SwappingSquares from '../../components/atoms/SwappingSquares';
import { useState } from 'react';

// TODO: build issue reporting
const ISSUE_REPORTING_ENABLED = false;

const Demo = ({ navbarRef }) => {
	const [loading, setLoading] = useState(true);
	const isClient = useIsClient();
	const router = useRouter();
	const { demo: demoURL, id } = router.query;

	if (!demoURL || !id) return <DemoNotFound />;

	const navbarHeight =
		navbarRef.current?.getBoundingClientRect()?.height || 0;
	const ViewPort = isClient ? window : { innerHeight: 600 };
	return (
		<div style={{ backgroundColor: 'white', position: 'relative' }}>
			{loading && <LoadingDemo />}
			<StyledIframe
				url={demoURL}
				onLoad={e => {
					console.log(e);
					setLoading(false);
				}}
				frameBorder="0"
				width="100%"
				height={ViewPort.innerHeight - navbarHeight + 'px'}
			/>
		</div>
	);
};

export default Demo;

const StyledIframe = styled(Iframe)`
	body {
		background-color: default;
	}
`;

const LoadingDemoContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.bg};
`;

const LoadingDemo = () => {
	return (
		<LoadingDemoContainer>
			<SwappingSquares />
			<Text variant="subtitle" textAlign="center">
				Just a second, we're loading your demo.
			</Text>
		</LoadingDemoContainer>
	);
};

const DemoNotFound = () => {
	return (
		<Box height="70vh">
			<Container>
				<Text variant="title" textAlign="center" mt="5">
					Demo not found
				</Text>
				<Text variant="subtitle" textAlign="center" mt="3">
					You can go back to the home page by clicking{' '}
					<Link href="/" variant="link">
						here
					</Link>
					.
				</Text>
				{ISSUE_REPORTING_ENABLED && (
					<Button variant="outlined" px="5" py="2" mx="auto" mt="4">
						Report issue
					</Button>
				)}
			</Container>
		</Box>
	);
};
