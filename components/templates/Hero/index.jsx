import React from 'react';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Media from '../../../utils/media';
import styled, { css } from 'styled-components';
import Button from '../../atoms/Button';
import FloatingBoxes, { FloatingBox } from '../../organisms/FloatingBox';
import { useRouter } from 'next/router';

const previewWebsites = [
	{
		photoURL: '/images/privatek.png',
		path: '/demos/privatek?demo=https://privatek.no',
	},
	{ photoURL: '/images/freaky.png', path: '/demos/freaky-friday' },
	{ photoURL: '/images/inova.png', path: '/demos/inova' },
	{ photoURL: '/images/biobalance.png', path: '/demos/biobalance' },
];

const Hero = () => {
	const router = useRouter();
	return (
		<div>
			<Container>
				<HeroContainer
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					height="500px"
				>
					<FloatingBoxes sizes={[150, 200, 300, 350]}>
						{previewWebsites.map((website, key) => (
							<StyledFloatingBox
								url={website.photoURL}
								onClick={() => router.push(website.path)}
								key={key}
							/>
						))}
					</FloatingBoxes>
					<HeroText>
						<Text variant="headline" textAlign="center">
							New Website?
						</Text>
						<Text variant="sub-heading" textAlign="center">
							Take your business to the next level with websites
							and designs that sell.
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
		</div>
	);
};

export default Hero;
const HeroContainer = styled(Box)`
	/* flex-direction: row-reverse; */
	flex-wrap: wrap;
	${Media.md} {
		flex-direction: row;
		flex-wrap: nowrap;
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

const StyledFloatingBox = styled(FloatingBox)`
	&:hover {
		box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.primary};
	}
`;
