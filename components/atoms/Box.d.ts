import { StyledComponent } from 'styled-components';
import {
	DisplayProps,
	TypographyProps,
	SpaceProps,
	ColorProps,
	ShadowProps,
	LayoutProps,
	FlexboxProps,
	BackgroundProps,
	PositionProps,
} from 'styled-system';
import theme from '../../theme';

type Theme = typeof theme;

type Props = DisplayProps<Theme> &
	TypographyProps<Theme> &
	SpaceProps<Theme> &
	ColorProps<Theme> &
	ShadowProps<Theme> &
	LayoutProps<Theme> &
	FlexboxProps<Theme> &
	BackgroundProps &
	PositionProps;
const Box: StyledComponent<'div', any, Props>;

export default Box;
