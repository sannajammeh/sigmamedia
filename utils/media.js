export const getBreakpoint = key => ({ theme }) => theme.breakpoints[key];
/**
 * @param {'sm' | 'md' | 'lg' | 'xl'} key
 */
const getQuery = key => () => ({ theme }) =>
	`@media screen and (min-width: ${theme.breakpoints[key]})`;
const Media = {
	sm: getQuery('sm'),
	md: getQuery('md'),
	lg: getQuery('lg'),
	xl: getQuery('xl'),
};

export default Media;
