import palette from './palette';

const colors = {
	palette,
	primary: palette.purple[500],
	secondary: palette.blue[500],
	bg: palette.dark[500],
	light: palette.white,
	dark: palette.dark[500],
	textOnBg: palette.white,
	textOnPrimary: palette.white,
	textOnLight: palette.dark[500],
};
const fontSizes = ['0.85', '1rem', '1.6rem', '2.66rem', '4rem'];
const shadows = {
	sm: '',
	md: '',
	lg: '',
};

const breakpoints = ['640px', '768px', '992px', '1200px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const spacing = ['0.25rem', '0.5rem', '1rem', '1.5rem', '3rem', '5rem'];

spacing.sm = spacing[0];
spacing.md = spacing[2];
spacing.lg = spacing[3];
spacing.xl = spacing[4];

export default {
	palette,
	colors,
	fontSizes,
	fontWeights: {
		thin: 300,
		regular: 400,
		medium: 500,
		'semi-bold': 600,
		bold: 700,
	},
	spacing,
	borders: {
		normal: '2px solid #ffffff',
		thick: '4px solid #ffffff',
		thin: '1px solid #ffffff',
	},
	shadows,
	zIndices: [111, 333, 666, 888, 999],
	breakpoints,
};
