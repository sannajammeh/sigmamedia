import React, { useEffect, useState } from 'react';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Media from '../../../utils/media';
import styled, { css, useTheme } from 'styled-components';
import Button from '../../atoms/Button';
import FloatingBoxes, { FloatingBox } from '../../organisms/FloatingBox';
import { useRouter } from 'next/router';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useViewport from '../../../hooks/useViewport';

const previewWebsites = [
	{
		photoURL: '/images/privatek.png',
		path: '/demos/privatek?demo=https://privatek.no',
	},
	{
		photoURL: '/images/freaky.png',
		path: '/demos/freaky-friday?demo=https://freaky-friday.vercel.app',
	},
	{
		photoURL: '/images/inova.png',
		path: '/demos/inova?demo=https://inova-gresen.vercel.app',
	},
	{
		photoURL: '/images/biobalance.png',
		path: '/demos/biobalance?demo=https://biobalance-sandy.vercel.app',
	},
];

const Hero = () => {
	const [boxes, setBoxes] = useState(previewWebsites);
	const theme = useTheme();
	const router = useRouter();
	const isLargeDevice = useMediaQuery(
		`screen and (min-width: ${theme.breakpoints.md})`
	);
	const viewport = useViewport({ width: 360 });

	useEffect(() => {
		if (isLargeDevice) return setBoxes(previewWebsites);
		const newArr = [...previewWebsites];
		newArr.pop();
		setBoxes(newArr);
	}, [isLargeDevice]);
	return (
		<Container as="section">
			<HeroContainer
				display="flex"
				justifyContent="space-between"
				minHeight="500px"
			>
				<div>
					<FloatingBoxes sizes={[viewport.width, 450, 450, 600]}>
						{boxes.map((website, key) => (
							<StyledFloatingBox
								url={website.photoURL}
								onClick={() => router.push(website.path)}
								key={key}
							/>
						))}
					</FloatingBoxes>
				</div>
				<HeroText>
					<Text variant="headline" textAlign="center">
						New Website?
					</Text>
					<Text variant="sub-heading" textAlign="center">
						Take your business to the next level with websites and
						designs that sell.
					</Text>
					<Box
						width="100%"
						display="flex"
						justifyContent="center"
						mt="4"
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
	);
};

export default Hero;

const HeroContainer = styled(Box)`
	flex-direction: column-reverse;
	flex-wrap: nowrap;
	align-items: center;
	padding-top: ${({ theme }) => theme.spacing.md};
	${Media.md} {
		padding-top: 0;
		flex-direction: row;
		flex-wrap: nowrap;
	}
`;

const HeroText = styled(Box)`
	order: 1;
	width: 100%;
	text-align: center;
	margin-bottom: ${({ theme }) => theme.spacing.md};
	${Media.sm} {
		order: 2;
		margin-bottom: 0;
	}
	${Media.md} {
		text-align: left;
		width: 50%;
	}
`;

const StyledFloatingBox = styled(FloatingBox)`
	&:hover {
		box-shadow: 0px 4px 16px ${({ theme }) => theme.palette.blue[500]};
	}
`;
