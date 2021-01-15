import styled from 'styled-components';
import Box from './Box';
import Container from './Container';

const LandingSection = styled(Container)`
	margin-top: ${({ theme }) => theme.spacing.xl};
	margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export default LandingSection;

LandingSection.defaultProps = {
	as: 'section',
};

export const LandingSectionHeader = styled(Box)`
	${({ theme }) => `margin-bottom: ${theme.spacing.lg}`}
`;
