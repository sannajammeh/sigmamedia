import styled, { css } from 'styled-components';
import { space, typography, variant, color, layout } from 'styled-system';
import Media from '../../utils/media';

const Text = styled.p`
	margin: 0;
	padding: 0;
	${variant({
		variants: {
			headline: {
				fontSize: 4,
				fontWeight: 'medium',
			},
			'second-headline': {
				fontSize: 3,
				fontWeight: 'regular',
			},
			'sub-heading': {
				fontSize: 2,
				fontWeight: 'regular',
			},
			title: {
				fontSize: 3,
				fontWeight: 'medium',
			},
			subtitle: {
				fontSize: 2,
				fontWeight: 'regular',
			},
			paragraph: {
				fontSize: 1,
				fontWeight: 'regular',
			},
			light: {
				fontWeight: 'thin',
			},
			link: {
				color: 'palette.blue.400',
				cursor: 'pointer',
				'&:hover': {
					textDecoration: 'underline',
				},
			},
		},
	})};
	${space};
	${typography};
	${color};
	${layout};
	${({ variant }) => {
		console.log('🚀 ~ file: Text.js ~ line 64 ~ variant', variant);

		switch (variant) {
			case 'headline':
				return headline;
			case 'sub-heading':
				return subHeading;
			case 'second-headline':
				return secondHeadline;
			default:
				return '';
		}
	}}
`;

export default Text;

/**
 * Variants
 */

const headline = css`
	font-size: ${({ theme }) => theme.fontSizes[3]};
	${Media.md} {
		font-size: ${({ theme }) => theme.fontSizes[4]};
	}
`;
const subHeading = css`
	font-size: ${({ theme }) => theme.fontSizes[1]};
	${Media.md} {
		font-size: ${({ theme }) => theme.fontSizes[2]};
	}
`;

const secondHeadline = css`
	font-size: ${({ theme }) => theme.fontSizes[2]};
	${Media.md} {
		font-size: ${({ theme }) => theme.fontSizes[3]};
	}
`;
