import styled from 'styled-components';
import {
	display,
	typography,
	spacing,
	color,
	shadow,
	size,
	flex,
	layout,
} from 'styled-system';
const Box = styled.div`
	${typography}
	${spacing}
    ${color}
    ${shadow}
    ${display}
    ${flex}
    ${layout}
`;

export default Box;
