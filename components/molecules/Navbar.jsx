import styled from 'styled-components';
import PropTypes from 'prop-types';
import { routeArray } from '../../routes';
import Button from '../atoms/Button';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Container from '../atoms/Container';
import Media from '../../utils/media';
import { forwardRef } from 'react';
import Link from '../atoms/Link';
import { useRouter } from 'next/router';

const Navbar = forwardRef(({ demoMode }, ref) => {
	return (
		<Header ref={ref} demoMode={demoMode}>
			<HeaderWrapper>
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
				{demoMode && (
					<Box width={4 / 6}>
						<Text textAlign="center" fontWeight="medium">
							DEMO MODE
						</Text>
					</Box>
				)}
				<DesktopBox width={1 / 6} display="flex">
					{demoMode ? (
						<DemoButton />
					) : (
						<Button
							variant="outlined"
							style={{ whiteSpace: 'nowrap' }}
							py="2"
							px="4"
						>
							Get Started
						</Button>
					)}
				</DesktopBox>
				<MobileBox>
					<i className="gg-menu-right-alt" />
				</MobileBox>
			</HeaderWrapper>
		</Header>
	);
});

export default Navbar;

// Styles
const Header = styled.header`
	padding-top: ${({ demoMode }) => (demoMode ? 0.5 : 1)}rem;
	padding-bottom: ${({ demoMode }) => (demoMode ? 0.5 : 1)}rem;
	padding-left: ${({ theme }) => theme.space[1]};
	transition: padding 0.2s ease;
	${({ theme, demoMode }) =>
		demoMode ? `box-shadow: ${theme.shadows.sm};` : ''}
`;

Header.defaultProps = {
	as: 'header',
};

const HeaderWrapper = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

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
			<Link href={href}>{children}</Link>
		</NavItemStyle>
	);
};

const DemoButton = () => {
	const router = useRouter();
	return (
		<Button
			variant="outlined"
			py="2"
			px="4"
			style={{ whiteSpace: 'nowrap' }}
			onClick={() => router.push('/')}
		>
			Back to home
		</Button>
	);
};

NavItem.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

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
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const MobileBox = styled(Box)`
	display: block;
	${Media.sm} {
		display: none;
	}
`;
