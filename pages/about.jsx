import styled from 'styled-components';
import Section from '../components/atoms/Section';
import Text from '../components/atoms/Text';
import Row from '../components/atoms/Row';
import Media from '../utils/media';
import Head from 'next/head';

// Animations
import { scrollReveal, titleAnim } from '../utils/animation';
import { useScroll } from '../hooks/useScroll';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useMediaQuery';
import { useIsClient } from '../hooks/client';

const About = () => {
	return (
		<div>
			<Head>
				<link
					href="https://css.gg/instagram.css"
					rel="stylesheet"
				></link>
			</Head>
			<Section>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Molestiae deleniti, quisquam inventore aut pariatur praesentium
				laudantium alias ducimus nostrum magnam in nam eos maxime? Ullam
				illo, dolore nemo doloribus veniam, corrupti adipisci officia
				aspernatur consectetur minima est vel iste. Porro iste sint,
				quaerat omnis autem quibusdam. Ullam corporis quibusdam vitae!
			</Section>
			<AboutSection>
				<MemberSection>
					<ReverseRow>
						<MemberImg>
							<img
								src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
								alt=""
							/>
						</MemberImg>
						<MemberText>
							<div>
								<Text variant="subtitle">CEO</Text>
								<Text variant="paragraph">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis repellendus
									quisquam eaque reiciendis. Cupiditate odit
									maiores provident earum itaque, ut labore!
									Voluptates unde autem aut cum nemo tempore,
									in modi!
								</Text>
							</div>
						</MemberText>
					</ReverseRow>
				</MemberSection>
				<MemberSection>
					<Row>
						<MemberText>
							<div>
								<Text variant="subtitle">CEO</Text>
								<Text variant="paragraph">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis repellendus
									quisquam eaque reiciendis. Cupiditate odit
									maiores provident earum itaque, ut labore!
									Voluptates unde autem aut cum nemo tempore,
									in modi!
								</Text>
							</div>
						</MemberText>
						<MemberImg>
							<img
								src="https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
								alt=""
							/>
						</MemberImg>
					</Row>
				</MemberSection>
				<MemberSection>
					<ReverseRow>
						<MemberImg>
							<img
								src="https://images.unsplash.com/photo-1533088468076-d1f6bdf16f62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
								alt=""
							/>
						</MemberImg>
						<MemberText>
							<div>
								<Text variant="subtitle">CEO</Text>
								<Text variant="paragraph">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis repellendus
									quisquam eaque reiciendis. Cupiditate odit
									maiores provident earum itaque, ut labore!
									Voluptates unde autem aut cum nemo tempore,
									in modi!
								</Text>
							</div>
						</MemberText>
					</ReverseRow>
				</MemberSection>
			</AboutSection>
		</div>
	);
};

export default About;

const AboutSection = styled(Section)`
	padding: 0rem !important;
	width: 100% !important;
`;

const MemberImgStyle = styled(motion.div)`
	height: 80vh;
	padding: 0 5rem;

	${Media.md} {
		flex: 50%;
		padding: 0 10rem;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 70vh;
		border-radius: 4px;
	}
`;
const MemberTextStyle = styled(motion.div)`
	padding: 5rem;
	${Media.md} {
		flex: 50%;
		padding: 10rem;
	}

	display: flex;
	align-items: center;
	justify-content: center;
`;

const MemberSection = styled(motion.div)`
	min-height: 60vh;
	${Media.md} {
		min-height: 100vh;
	}
`;

const ReverseRow = styled(Row)`
	display: flex !important;
	div:first-child {
		order: 2;
	}
	${Media.md} {
		flex-direction: row;
	}
`;

const MemberImg = ({ children }) => {
	const [element, controls] = useScroll();

	return (
		<MemberImgStyle
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			{children}
		</MemberImgStyle>
	);
};

const MemberText = ({ children }) => {
	const [element, controls] = useScroll();

	const isClient = useIsClient();
	const isMobile = useIsMobile();

	if (!isClient) return null;
	return (
		<MemberTextStyle
			variants={isMobile ? scrollReveal : titleAnim}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			{children}
		</MemberTextStyle>
	);
};
