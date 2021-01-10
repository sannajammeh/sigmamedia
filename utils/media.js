export const getBreakpoint = key => ({ theme }) => theme.breakpoints[key];
const makeQuery = width =>
	`@media screen and (min-width: ${
		typeof width === 'number' ? width + 'px' : width
	})`;
/**
 * @param {'sm' | 'md' | 'lg' | 'xl'} key
 */
const getQuery = key => () => ({ theme }) => makeQuery(theme.breakpoints[key]);

const Media = {
	sm: getQuery('sm'),
	md: getQuery('md'),
	lg: getQuery('lg'),
	xl: getQuery('xl'),
	xxl: getQuery('xxl'),
	w: makeQuery,
};

export default Media;
