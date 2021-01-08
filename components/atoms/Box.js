import styled from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop';

import {
	display,
	typography,
	space,
	color,
	shadow,
	flexbox,
	layout,
	background,
	position,
} from 'styled-system';
const Box = styled('div', { shouldForwardProp })`
	${typography}
	${space}
    ${color}
    ${shadow}
    ${display}
	${layout}
	${flexbox}
	${background}
	${position}
`;

export default Box;
