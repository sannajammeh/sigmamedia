import styled from 'styled-components';
import { space, typography, variant, color, layout } from 'styled-system';

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
`;

export default Text;
