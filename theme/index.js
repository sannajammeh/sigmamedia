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
	sm: '0px 4px 8px rgba(0,0,0,0.12)',
	md: '0px 6px 16px rgba(0,0,0,0.12)',
	lg: '0px 8px 30px rgba(0,0,0,0.12)',
};

const breakpoints = ['640px', '768px', '992px', '1200px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const spacing = ['0.25rem', '0.5rem', '1rem', '1.5rem', '3rem', '5rem'];

spacing.sm = spacing[0];
spacing.md = spacing[2];
spacing.lg = spacing[4];
spacing.xl = spacing[5];

const theme = {
	palette,
	colors,
	fontSizes,
	fontWeights: {
		thin: 300,
		regular: 400,
		medium: 500,
		'semi-bold': 600,
		bold: 700,
		'extra-bold': 800,
		black: 900,
	},
	space: spacing,
	borders: {
		normal: '2px solid #ffffff',
		thick: '4px solid #ffffff',
		thin: '1px solid #ffffff',
	},
	shadows,
	zIndices: [111, 333, 666, 888, 999],
	breakpoints,
};
export default theme;

export const lightTheme = {
	...theme,
	colors: {
		...theme.colors,
		bg: palette.white,
		textOnBg: palette.dark[600],
	},
};
