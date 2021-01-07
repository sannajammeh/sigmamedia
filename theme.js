const colors = {};
const fontSizes = [];
const shadows = {
	sm: '',
	md: '',
	lg: '',
};

const breakpoints = ['40em', '52em', '64em', '80em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
	colors,
	fontSizes,
	spacing: [],
	borders: [],
	shadows,
	zIndices: [111, 333, 666, 888, 999],
	breakpoints,
};
