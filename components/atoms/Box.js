import styled from 'styled-components';
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
const Box = styled.div`
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
