import styled from 'styled-components';
import Media from '../../utils/media';

const Input = styled.input`
	border: 1px solid white;
	margin: 1rem;
	padding: 1rem;
	height: 2.5rem;
	background: transparent;
	transition: transform 0.5s ease-in-out;
	font-family: inherit;
	&.sm {
		width: 100%;
	}
	&.lg {
		height: 200px;
		width: 100%;
	}
	${Media.md} {
		&.sm {
			width: 50%;
		}
		&.lg {
			width: 100%;
			height: 200px;
		}
	}
	&:focus {
		outline: none;
	}
	&:hover {
		transform: scale(1.01);
		color: white;
	}
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: whitesmoke;
		opacity: 1; /* Firefox */
	}
`;

export default Input;
