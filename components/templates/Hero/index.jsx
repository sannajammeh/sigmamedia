import { useEffect, useRef, useState } from 'react';
import Container from '../../atoms/Container';
import Box from '../../atoms/Box';
import Text from '../../atoms/Text';
import Media from '../../../utils/media';
import styled, { css, keyframes, useTheme } from 'styled-components';
import Button from '../../atoms/Button';
import FloatingBoxes, {
	FloatingBox as FloatingBoxBase,
} from '../../organisms/FloatingBox';
import { useRouter } from 'next/router';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useViewport from '../../../hooks/useViewport';

const previewWebsites = [
	{
		photoURL: '/images/privatek.png',
		path: '/demos/privatek?demo=https://privatek.no',
	},
	{
		photoURL: '/images/freaky.png',
		path: '/demos/freaky-friday?demo=https://freaky-friday.vercel.app',
	},
	{
		photoURL: '/images/inova.png',
		path: '/demos/inova?demo=https://inova-gresen.vercel.app',
	},
	{
		photoURL: '/images/biobalance.png',
		path: '/demos/biobalance?demo=https://biobalance-sandy.vercel.app',
	},
];

const Hero = () => {
	const [boxes, setBoxes] = useState(previewWebsites);
	const router = useRouter();
	const viewport = useViewport({ width: 360 });
	const [boxSize, setBoxSize] = useState(viewport.width / 1);
	const containerRef = useRef(null);

	useEffect(() => {
		setBoxSize(containerRef.current.offsetWidth);
		window.onresize = () => {
			setBoxSize(containerRef.current.offsetWidth / 1);
		};

		return () => {
			window.onresize = null;
		};
	}, [containerRef]);

	return (
		<Container as="section">
			<HeroContainer
				display="flex"
				justifyContent={['center', 'center', 'space-between']}
				minHeight={['60vh', '60vh', '90vh']}
				maxWidth="100%"
				width="100%"
			>
				<Box ref={containerRef} width={['100%', '100%', '50%']}>
					<FloatingBoxes size={boxSize}>
						{boxes.map((website, index) => (
							<FloatingBox
								url={website.photoURL}
								onClick={() => router.push(website.path)}
								index={index}
								key={index}
							/>
						))}
					</FloatingBoxes>
				</Box>
				<HeroText minWidth="50%">
					<Text variant="headline" textAlign="center">
						New Website?
					</Text>
					<Text variant="sub-heading" textAlign="center">
						Take your business to the next level with websites and
						designs that sell.
					</Text>
					<Box
						width="100%"
						display="flex"
						justifyContent="center"
						mt="4"
					>
						<div>
							<Button mx="1">Get Started</Button>
						</div>
						<div>
							<Button mx="1" variant="outlined">
								Learn more
							</Button>
						</div>
					</Box>
				</HeroText>
			</HeroContainer>
		</Container>
	);
};

export default Hero;

const HeroContainer = styled(Box)`
	flex-direction: column-reverse;
	flex-wrap: nowrap;
	align-items: center;
	padding-top: ${({ theme }) => theme.space.md};
	${Media.md} {
		padding-top: 0;
		flex-direction: row;
		flex-wrap: nowrap;
	}
`;

const HeroText = styled(Box)`
	order: 1;
	width: 100%;
	text-align: center;
	margin-bottom: ${({ theme }) => theme.space.md};
	${Media.sm} {
		order: 2;
		margin-bottom: 0;
	}
	${Media.md} {
		text-align: left;
		width: 50%;
	}
`;

const StyledFloatingBox = styled(FloatingBoxBase)`
	${({ theme }) =>
		theme.mode === 'light'
			? `box-shadow: 0px 1px 16px ${theme.palette.blue[400]};`
			: ''}

	&:hover {
		box-shadow: 0px 4px 16px ${({ theme }) => theme.palette.blue[500]};
	}

	&.scaleOut {
		transform: translateY(-20px) translateX(-20px) translateZ(0) scale(2);
		&:nth-child(2) {
			transform: translateY(-20px) translateX(-20px) translateZ(0)
				scale(1.5) rotate(-90deg);
		}
		opacity: 0;
	}
	&.scaleIn {
		transition: transform 1s ease;
		transition-property: transform, opacity;
		transform: translateY(0) translateX(0) translateZ(0) scale(1);
		&:nth-child(2) {
			transform: translateY(0) translateX(0) translateZ(0) scale(1)
				rotate(-90deg);
		}
		opacity: 1;
	}
`;

const FloatingBox = props => {
	const [showBox, setShowBox] = useState(false);
	const [ended, setEnded] = useState(false);
	useEffect(() => {
		requestAnimationFrame(() => setShowBox(true));
	}, []);

	const handleTransitionEnd = () => {
		setEnded(true);
	};

	return (
		<StyledFloatingBox
			className={ended ? undefined : showBox ? 'scaleIn' : 'scaleOut'}
			onTransitionEnd={handleTransitionEnd}
			style={{
				transitionDelay: !ended
					? `${props.index ? props.index / 4 : 0}s`
					: undefined,
			}}
			{...props}
		/>
	);
};
