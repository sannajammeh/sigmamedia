import styled from 'styled-components';
import Media from '../../../utils/media';

const FloatingBoxes = ({
	images = [],
	sizes = [150, 200, 300, 400],
	boxProps = {},
	css,
	onBoxClick,
	children,
	...rest
}) => {
	const { ...restBoxProps } = boxProps;
	const handleBoxClick = (e, index) => {
		onBoxClick && onBoxClick(e, index);
	};
	return (
		<FloatingBoxContainer css={css} {...rest} sizes={sizes}>
			{images.length
				? images.map((url, key) => (
						<FloatingBox
							key={key}
							onClick={e => handleBoxClick(e, key)}
							{...restBoxProps}
							url={url}
						/>
				  ))
				: children}
		</FloatingBoxContainer>
	);
};

export default FloatingBoxes;

const getBoxSize = (d = 150, n = 0) => ({ boxSize = d }) =>
	boxSize instanceof Array ? boxSize[n] : boxSize;

const FloatingBoxContainer = styled.div`
	--gutter: 5px;
	--container-size: ${({ sizes }) => getBoxSize(sizes[0])}px;
	${Media.sm} {
		--container-size: ${({ sizes }) => getBoxSize(sizes[1])}px;
	}
	${Media.md} {
		--container-size: ${({ sizes }) => getBoxSize(sizes[2])}px;
	}
	${Media.lg} {
		--container-size: ${({ sizes }) => getBoxSize(sizes[3])}px;
	}

	position: relative;
	width: var(--container-size);
	height: var(--container-size);
	transition: all 0.3s ease;
	transform: matrix(1.48, 0.95, -1.48, 0.98, 0, 0) scale(0.5) translateX(15%)
		translateY(-15%);
	transform-origin: 50% 50%;
	${({ css }) => css}
`;
export const FloatingBox = styled.div`
	position: absolute;
	width: calc((var(--container-size) / 2) - var(--gutter, 0));
	height: calc((var(--container-size) / 2) - var(--gutter, 0));
	${({ url }) =>
		url
			? `
                    -webkit-backface-visibility: hidden; 
					background-image: url(${url});
					background-size: cover;
			  `
			: `
					background-image: linear-gradient(
						to right,
						#74ebd5,
						#acb6e5
					);
			  `}
	transition: z-index 0.3s step-end, all 0.2s ease;
	will-change: transform;
	z-index: 0;
	cursor: pointer;
	transform: translateZ(0);

	&::after {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
		font-weight: bold;
		font-size: 2rem;
	}
	&:nth-child(1) {
		left: 0;
		top: 0;
	}
	&:nth-child(2) {
		left: calc((var(--container-size) / 2) + var(--gutter, 0));
		top: 0;
		transform: rotate(-90deg);
	}
	&:nth-child(4) {
		left: calc((var(--container-size) / 2) + var(--gutter, 0));
		bottom: 0;
	}
	&:nth-child(3) {
		left: 0;
		bottom: 0;
	}
	&:hover {
		transform: translateY(-10px) translateX(-10px) translateZ(0)
			${({ hoverScale }) => (hoverScale ? `scale(${hoverScale})` : '')};
		transition: z-index 0.3s step-start, all 0.3s ease;
		z-index: 1;
		&:nth-child(2) {
			transform: translateY(-10px) translateX(-10px) translateZ(0)
				rotate(-90deg)
				${({ hoverScale }) =>
					hoverScale ? `scale(${hoverScale})` : ''};
		}
	}
	${({ css }) => css}
`;
