import React from 'react';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Media from '../../../utils/media';
import styled, { useTheme } from 'styled-components';
import Button from '../../atoms/Button';
import FloatingBox from '../../organisms/FloatingBox';

const Hero = () => {
	const { breakpoints } = useTheme();
	return (
		<div>
			<Container>
				<HeroContainer
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					height="500px"
				>
					<FloatingBox
						sizes={[150, 200, 300, 350]}
						images={[
							'/images/privatek.png',
							'/images/freaky.png',
							'/images/inova.png',
							'/images/biobalance.png',
						]}
					/>
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
