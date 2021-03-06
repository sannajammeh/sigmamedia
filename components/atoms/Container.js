import styled from 'styled-components';
import Media from '../../utils/media';

const ContainerBase = styled.div`
	margin: 0 auto;
	width: 100%;
	padding: 0 1rem;
	${Media.sm} {
		width: 90%;
	}
	${Media.md} {
		width: 85%;
	}
	${Media.lg} {
		width: 80%;
	}
	${Media.xl} {
		width: 75%;
	}
	${Media.w(2000)} {
		width: 65%;
	}
`;

const Container = ContainerBase;

export default Container;
