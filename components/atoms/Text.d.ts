import { StyledComponent } from 'styled-components';
import {
	DisplayProps,
	TypographyProps,
	SpaceProps,
	ColorProps,
	LayoutProps,
} from 'styled-system';
import theme from '../../theme';

type Theme = typeof theme;

type Props = DisplayProps<Theme> &
	TypographyProps<Theme> &
	SpaceProps<Theme> &
	ColorProps<Theme> &
	LayoutProps<Theme> & {
		variant:
			| 'headline'
			| 'second-headline'
			| 'sub-heading'
			| 'title'
			| 'subtitle'
			| 'paragraph'
			| 'light';
	};

const Text: StyledComponent<'div', any, Props>;

export default Text;
