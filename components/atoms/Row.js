import styled from 'styled-components';
import Media from '../../utils/media';

const Row = styled.div`
	display: block;
	margin: 0 auto;
	${Media.md} {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default Row;
