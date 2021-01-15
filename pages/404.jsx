import styled from 'styled-components';
import Text from '../components/atoms/Text';

const Error404 = () => {
	return (
		<ErrorStyle>
			<Text textAlign="center" variant="title">
				404
			</Text>
			<Separator />
			<Text variant="subtitle">This page could not be found.</Text>
		</ErrorStyle>
	);
};

export default Error404;

const ErrorStyle = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Separator = styled.div`
	margin: 0 1rem;
	width: 2px;
	height: 3rem;
	background-color: ${({ theme }) => theme.colors.textOnBg};
	transform: rotate(20deg);
`;
