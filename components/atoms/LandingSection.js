import styled from 'styled-components';
import Container from './Container';

const LandingSection = styled(Container)`
	margin-top: ${({ theme }) => theme.spacing.xl};
	margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export default LandingSection;

LandingSection.defaultProps = {
	as: 'section',
};
