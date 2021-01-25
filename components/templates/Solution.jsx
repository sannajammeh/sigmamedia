import React from 'react';
import Text from '../atoms/Text';
import LandingSection, { LandingSectionHeader } from '../atoms/LandingSection';
import styled from 'styled-components';
import Box from '../atoms/Box';
import Media from '../../utils/media';

const Solution = () => {
	return (
		<LandingSection>
			<LandingSectionHeader>
				<Text variant="second-headline" textAlign="center">
					Your website exactly how you want it
				</Text>
			</LandingSectionHeader>
			<Box
				display={['block', 'block', 'flex']}
				justifyContent="space-around"
			>
				<SolutionImage src="/images/how-you-like.svg" />
				<Box flexBasis={[null, null, '50%']}>
					Get your website custom taylored to your needs
				</Box>
			</Box>
		</LandingSection>
	);
};

export default Solution;

const SolutionImage = styled.img`
	width: 100%;
	${Media.md} {
		width: 50%;
	}
`;
