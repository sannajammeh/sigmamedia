import styled from 'styled-components';
import Media from '../../utils/media';

const ContainerBase = styled.div`
	margin: 0 auto;
	width: 100%;
	${Media.sm} {
		width: 90%;
	}
	${Media.md} {
		width: 80%;
	}
	${Media.lg} {
		width: 75%;
	}
`;

const Container = ContainerBase;

export default Container;
