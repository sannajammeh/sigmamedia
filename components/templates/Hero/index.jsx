import React from 'react';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Media from '../../../utils/media';
import styled, { useTheme } from 'styled-components';
import Button from '../../atoms/Button';

const left = [50 + 10, 50 + 10, 177.1 + 10, 187.5 + 20, 208 + 20];
const bottom = [-29, -29, -45, -39, -43];

const Hero = () => {
	const { breakpoints } = useTheme();
	console.log(
		'🚀 ~ file: index.jsx ~ line 11 ~ Hero ~ breakpoints',
		breakpoints
	);
	return (
		<div>
			<Container>
				<HeroContainer
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					height="500px"
				>
					<SkewContainer>
						<Skew width="100%">
							<Box position="relative" width="100%">
								<PreviewImage
									position="absolute"
									top="0"
									left="0"
									backgroundImage="url('/images/biobalance.png')"
									backgroundSize="cover"
									width="250px"
									height="250px"
								/>

								<PreviewImage
									position="absolute"
									top="0"
									left={left}
									backgroundImage="url('/images/privatek.png')"
									backgroundSize="cover"
									width="250px"
									height="250px"
								/>

								<PreviewImage
									position="absolute"
									bottom={bottom}
									left="0"
									backgroundImage="url('/images/freaky.png')"
									backgroundSize="cover"
									width="250px"
									height="250px"
								/>
								<PreviewImage
									position="absolute"
									bottom={bottom}
									left={left}
									backgroundImage="url('/images/inova.png')"
									backgroundSize="contain"
									width="250px"
									height="250px"
								/>
							</Box>
						</Skew>
					</SkewContainer>
					<HeroText>
						<Text variant="headline">New Website?</Text>
						<Text variant="sub-heading">
							Take your business to the next level with websites
							and designs that sell.
						</Text>
						<Box
							width="100%"
							display="flex"
							justifyContent="flex-end"
						>
							<div>
								<Button mx="1">Inquire</Button>
							</div>
							<div>
								<Button mx="1" variant="outlined">
									Learn more
								</Button>
							</div>
						</Box>
					</HeroText>
				</HeroContainer>
			</Container>
		</div>
	);
};

export default Hero;

const SkewContainer = styled.div`
	width: 200px;
	height: 166px;
	order: 1;
	${Media.sm} {
		order: 2;
	}
	${Media.sm} {
		width: 400px;
		height: 333px;
	}
	${Media.lg} {
		width: 425px;
		height: 354.16px;
	}
	${Media.lg} {
		width: 450px;
		height: 375px;
	}
	${Media.xl} {
		width: 500px;
		height: 416px;
	}
	transform: translateY(50%) translateX(-10%) scale(0.9);
`;

const Skew = styled(Box)`
	transform: matrix(0.71, -0.54, 0.93, 0.71, 0, 0);
`;

const HeroContainer = styled(Box)`
	/* flex-direction: row-reverse; */
	flex-wrap: wrap;
	${Media.md} {
		flex-direction: row;
		flex-wrap: nowrap;
	}
`;

const PreviewImage = styled(Box)`
	margin: 10px;
	margin-bottom: 5px;
	z-index: 0;

	width: 50px;
	height: 50px;
	${Media.sm} {
		width: 100px;
		height: 100px;
	}
	${Media.md} {
		width: 177.1px;
		height: 177.1px;
	}
	${Media.lg} {
		width: 187.5px;
		height: 187.5px;
	}
	${Media.xl} {
		width: 208px;
		height: 208px;
	}

	cursor: pointer;
	/* transform: translateX(35%) translateY(-35%); */
	transform: scaleY(0.8);
	transition: z-index 0.3s step-end, all 0.2s ease;
	&:hover {
		transform: translateX(10%) translateY(-10%) scale(1.1) scaleY(0.8);
		/* transform: scale(1.1); */
		transition: z-index 0.3s step-start, all 0.3s ease;
		z-index: 1;
		box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.1);
		filter: drop-shadow(0px 2px 4px rgba(255, 2, 150, 0.4));
	}
`;

const HeroText = styled(Box)`
	order: 1;
	width: 100%;
	text-align: center;
	${Media.sm} {
		order: 2;
	}
	${Media.md} {
		text-align: left;
		width: 50%;
	}
`;
