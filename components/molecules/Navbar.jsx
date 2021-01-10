import styled from 'styled-components';
import PropTypes from 'prop-types';
import { routeArray } from '../../routes';
import Button from '../atoms/Button';
import Box from '../atoms/Box';
import Container from '../atoms/Container';
import Media from '../../utils/media';
import { forwardRef } from 'react';
import Link from '../atoms/Link';

const Navbar = forwardRef(({ demoMode }, ref) => {
	return (
		<Header ref={ref}>
			<Box width={1 / 6} display="flex" justifyContent="start">
				<Link pointer href="/">
					<img src="/figma.svg" height="30px" />
				</Link>
			</Box>
			{!demoMode && (
				<DesktopBox width={4 / 6}>
					<nav>
						<NavList>
							{routeArray.map(([name, path], key) => (
								<NavItem key={key} href={path}>
									{name}
								</NavItem>
							))}
						</NavList>
					</nav>
				</DesktopBox>
			)}
			<DesktopBox width={1 / 6} display="flex" justifyContent="flex-end">
				<Button variant="outlined" py="2" px="4">
					{!demoMode ? 'Inquire' : 'Viewing Demo'}
				</Button>
			</DesktopBox>
			<MobileBox>
				<i className="gg-menu-right-alt" />
			</MobileBox>
		</Header>
	);
});

export default Navbar;

// Styles
const Header = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

Header.defaultProps = {
	as: 'header',
};

const NavList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
`;

const NavItem = ({ href, children }) => {
	return (
		<NavItemStyle>
			<Link href={href}>
				<Anchor>{children}</Anchor>
			</Link>
		</NavItemStyle>
	);
};

NavItem.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

const Anchor = styled.a`
	text-decoration: inherit;
	color: inherit;
	margin: 0;
	padding: 0;
`;

const NavItemStyle = styled.li`
	margin: 0 1rem;
	list-style: none;
	text-transform: capitalize;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

const DesktopBox = styled(Box)`
	display: none;
	${Media.sm} {
		display: block;
	}
`;

const MobileBox = styled(Box)`
	display: block;
	${Media.sm} {
		display: none;
	}
`;
