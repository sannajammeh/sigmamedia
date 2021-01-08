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
		variant: 'primary' | 'outlined' | 'outlined-dark';
	};

const Button: StyledComponent<'button', any, Props>;

export default Button;
