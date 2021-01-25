import styled from 'styled-components';
import Box from './Box';
import Container from './Container';
import Media from '../../utils/media';

const LandingSection = styled(Container)`
	margin-top: ${({ theme }) => theme.space.xl};
	margin-bottom: ${({ theme }) => theme.space.xl};
`;

export default LandingSection;

LandingSection.defaultProps = {
	as: 'section',
};

export const LandingSectionHeader = styled(Box)`
	${({ theme }) => `margin-bottom: ${theme.space.md}`};

	${Media.md} {
		${({ theme }) => `margin-bottom: ${theme.space.lg}`}
	}
`;
