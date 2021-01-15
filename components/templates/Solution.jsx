import React from 'react';
import Text from '../atoms/Text';
import LandingSection, { LandingSectionHeader } from '../atoms/LandingSection';
import styled from 'styled-components';
import Box from '../atoms/Box';

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
				<Box flexBasis={[null, null, '50%']}>sd</Box>
			</Box>
		</LandingSection>
	);
};

export default Solution;

const SolutionImage = styled.img`
	width: 50%;
`;
