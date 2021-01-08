import Head from 'next/head';
import Box from '../components/atoms/Box';
import Container from '../components/atoms/Container';
import Text from '../components/atoms/Text';
import styled from 'styled-components';
export default function Home() {
	return (
		<>
			<Head>
				<title>Sigma Media | Tengel suger</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Container>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						height="500px"
					>
						<Box
							width="600px"
							height="500px"
							style={{
								transform:
									'translateY(50%) translateX(-10%) scale(0.9)',
							}}
						>
							<MatrixBox width="100%">
								<Box position="relative" width="100%">
									<SecondBox
										position="absolute"
										top="0"
										left="0"
										backgroundImage="url('/images/biobalance.png')"
										backgroundSize="cover"
										width="250px"
										height="250px"
									/>

									<SecondBox
										position="absolute"
										top="0"
										left={250 + 20}
										backgroundImage="url('/images/privatek.png')"
										backgroundSize="cover"
										width="250px"
										height="250px"
									/>

									<SecondBox
										position="absolute"
										bottom={-54 + 3}
										left="0"
										backgroundImage="url('/images/freaky.png')"
										backgroundSize="cover"
										width="250px"
										height="250px"
									/>
									<SecondBox
										position="absolute"
										bottom={-54 + 3}
										left={250 + 20}
										backgroundImage="url('/images/inova.png')"
										backgroundSize="contain"
										width="250px"
										height="250px"
									/>
								</Box>
							</MatrixBox>
						</Box>
						<Box width={1 / 2}>
							<Text variant="headline" textAlign="right">
								New Website?
							</Text>
							<Text variant="sub-heading" textAlign="right">
								Take your business to the next level with
								websites and designs that sell.
							</Text>
						</Box>
					</Box>
				</Container>
			</main>
		</>
	);
}

const MatrixBox = styled(Box)`
	transform: matrix(0.71, -0.54, 0.93, 0.71, 0, 0);
`;

const SecondBox = styled(Box)`
	margin: 10px;
	margin-bottom: 5px;
	z-index: 0;

	cursor: pointer;
	/* transform: translateX(35%) translateY(-35%); */
	transform: scaleY(0.8);
	transition: z-index 0.3s step-end, all 0.3s ease;
	&:hover {
		transform: translateX(10%) translateY(-10%) scale(1.1) scaleY(0.8);
		/* transform: scale(1.1); */
		transition: z-index 0.3s step-start, all 0.3s ease;
		z-index: 1;
		box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.1);
		filter: drop-shadow(0px 2px 4px rgba(255, 2, 150, 0.4));
	}
`;
