import styled from 'styled-components';
import { variant, space, layout } from 'styled-system';
import css from '@styled-system/css';

const Button = styled.button`
	padding: 12px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	font-size: 1rem;
	outline: none;
	font-family: inherit;
	border: ${({ theme }) => theme.borders.normal};
	border-color: transparent;
	transition: all 0.2s ease;
	transition-property: background-color, border, transform;
	${space};
	${layout};
	${css({
		'&:hover': {
			fontWeight: 'medium',
		},
		'&:active': {
			transform: 'scale(0.95)',
		},
	})};
	${variant({
		variants: {
			primary: {
				color: 'textOnPrimary',
				bg: 'primary',
				'&:hover': {
					border: 'normal',
					borderColor: 'primary',
					backgroundColor: 'transparent',
					color: ({ palette }) => palette.purple[300],
				},
			},
			outlined: {
				bg: 'transparent',
				color: 'textOnBg',
				border: 'normal',
				'&:hover': {
					backgroundColor: 'light',
					color: 'textOnLight',
				},
			},
			'outlined-dark': {
				bg: 'transparent',
				color: 'bg',
				border: 'normal',
				borderColor: 'bg',
				'&:hover': {
					backgroundColor: 'bg',
					color: 'textOnBg',
				},
			},
		},
	})};
`;

Button.defaultProps = {
	variant: 'primary',
};

export default Button;
