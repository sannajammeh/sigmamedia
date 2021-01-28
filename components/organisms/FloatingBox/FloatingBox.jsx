import { Children } from 'react';
import styled, { keyframes } from 'styled-components';

const FloatingBoxes = ({
	images = [],
	boxProps = {},
	css,
	onBoxClick,
	children,
	size,
	...rest
}) => {
	const { ...restBoxProps } = boxProps;
	const handleBoxClick = (e, index) => {
		onBoxClick && onBoxClick(e, index);
	};
	const childs = Children.toArray(children);
	return (
		<FloatingContain size={size}>
			<FloatingBoxContainer
				items={childs.length || images.length}
				css={css}
				{...rest}
			>
				{images.length
					? images.map((url, key) => (
							<FloatingBox
								key={key}
								onClick={e => handleBoxClick(e, key)}
								{...restBoxProps}
								url={url}
							/>
					  ))
					: childs}
			</FloatingBoxContainer>
		</FloatingContain>
	);
};

export default FloatingBoxes;

const FloatingContain = styled('div').attrs(props => ({
	style: {
		'--container-size': props.size + 'px',
	},
}))`
	display: flex;
	justify-content: center;
	align-items: center;

	width: var(--container-size);
	height: calc(var(--container-size) / 1.5);
`;

const FloatingBoxContainer = styled.div`
	--gutter: 5px;

	position: relative;
	width: var(--container-size);
	height: var(--container-size);
	transition: all 0.3s ease;
	transform: matrix(1.48, 0.95, -1.48, 0.98, 0, 0) scale(0.3) translateX(0%)
		translateY(0%);
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
		transform: translateY(-20px) translateX(-20px) translateZ(0)
			${({ hoverScale }) => (hoverScale ? `scale(${hoverScale})` : '')} !important;
		transition: z-index 0.3s step-start, all 0.3s ease;
		z-index: 1;
		&:nth-child(2) {
			transform: translateY(-20px) translateX(-20px) translateZ(0)
				rotate(-90deg)
				${({ hoverScale }) =>
					hoverScale ? `scale(${hoverScale})` : ''} !important;
		}
	}
	${({ css }) => css}
`;
