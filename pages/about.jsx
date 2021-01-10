import styled from 'styled-components';
import Section from '../components/atoms/Section';
import Text from '../components/atoms/Text';
import RowBase from '../components/atoms/Row';
import Media from '../utils/media';
import Head from 'next/head';
import Container from '../components/atoms/Container';
// Animations
import { listAnim, scrollReveal, titleAnim } from '../utils/animation';
import { useScroll } from '../hooks/useScroll';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useMediaQuery';
import { useIsClient } from '../hooks/client';
import Header from '../components/atoms/Header';

const About = () => {
	const [element, controls] = useScroll();
	return (
		<div>
			<Head>
				<link
					href="https://css.gg/instagram.css"
					rel="stylesheet"
				></link>
			</Head>
			<Section>
				<AboutHeader
					variants={listAnim}
					animate={'show'}
					initial="hidden"
				>
					<motion.div variants={titleAnim}>
						<Text variant="headline">
							Sigma Media is a creative
						</Text>
					</motion.div>
					<motion.div variants={titleAnim}>
						<Text variant="headline">studio specialized in</Text>
					</motion.div>
					<motion.div variants={titleAnim}>
						<Text variant="headline">interactive experiences</Text>
					</motion.div>
					<motion.div variants={titleAnim}>
						<Text variant="headline">& animation.</Text>
					</motion.div>
				</AboutHeader>
			</Section>
			<AboutSection>
				<AboutUsText variant="title">Say Hello To Our Team</AboutUsText>
				<MemberSection>
					<ReverseRow>
						<MemberImg>
							<MemberImgDisplay
								src="https://images.unsplash.com/photo-1515161079661-197513d8b51e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
								src1="https://images.unsplash.com/photo-1515161002491-fa402e64cdb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
							></MemberImgDisplay>
						</MemberImg>
						<MemberText>
							<div>
								<Text
									variant="subtitle"
									className="memberTitle"
								>
									CEO
								</Text>
								<Text
									variant="paragraph"
									className="memberDescription"
								>
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
						<MemberImg>
							<MemberImgDisplay
								src="https://images.unsplash.com/photo-1567804619027-90a6a07063dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
								src1="https://images.unsplash.com/photo-1567804623185-29d6abca9def?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
							></MemberImgDisplay>
						</MemberImg>
						<MemberText>
							<div>
								<Text
									variant="subtitle"
									className="memberTitle"
								>
									CEO
								</Text>
								<Text
									variant="paragraph"
									className="memberDescription"
								>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Perferendis repellendus
									quisquam eaque reiciendis. Cupiditate odit
									maiores provident earum itaque, ut labore!
									Voluptates unde autem aut cum nemo tempore,
									in modi!
								</Text>
							</div>
						</MemberText>
					</Row>
				</MemberSection>
				<MemberSection>
					<ReverseRow>
						<MemberImg>
							<MemberImgDisplay
								src="https://images.unsplash.com/photo-1598976422096-120ebfd5a022?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
								src1="https://images.unsplash.com/photo-1595052233800-797ff8ffe1cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
							></MemberImgDisplay>
						</MemberImg>
						<MemberText>
							<div>
								<Text
									variant="subtitle"
									className="memberTitle"
								>
									CEO
								</Text>
								<Text
									variant="paragraph"
									className="memberDescription"
								>
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

const AboutHeader = styled(motion.div)`
	padding: 2rem;
	min-height: 100vh;
	//color: ${({ theme }) => theme.palette.rose[400]};
	padding: 10rem 10rem 10rem 0;
	margin-right: 30%;
`;

const AboutSection = styled(Section)`
	padding: 0rem !important;
	width: 100% !important;
`;

const MemberImgStyle = styled(motion.div)`
	height: 70vh;
	padding: 0 5rem;
	${Media.md} {
		flex: 50%;

		padding: 0 10rem;
	}
`;

const AboutUsText = styled(Text)`
	padding: 0rem 5rem;
	margin: 2rem 0;
	${Media.md} {
		padding: 0 10rem;
	}
`;

const MemberImgDisplay = styled.div`
	width: 100%;
	height: 100%;
	background-image: url('${({ src }) => src}');
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 4px;
	transition: all 0.2s ease-in-out;
	margin: 0 auto;
	will-change: background-image;
	${({ src1 }) =>
		src1
			? `&:hover {
		background-image: url('${src1}');
	}`
			: ''};
`;

const MemberTextStyle = styled(motion.div)`
	padding: 3rem 5rem;
	${Media.md} {
		flex: 50%;
		padding: 10rem;
	}

	display: flex;
	align-items: center;
	justify-content: center;
	.memberTitle {
		font-weight: 500;
		padding: 1rem 0;
		color: ${({ theme }) => theme.palette.rose[500]};
	}
	.memberDescription {
		font-weight: 100;
		padding: 0.2rem;
		line-height: 1.8;
	}
`;

const MemberSection = styled(motion.div)`
	min-height: 60vh;
	${Media.md} {
		min-height: 100vh;
	}
`;

const ReverseRow = styled(RowBase)`
	display: flex !important;
	flex-direction: column;
	div:first-child {
		order: 1;
	}
	${Media.md} {
		flex-direction: row;
		div:first-child {
			order: 2;
		}
	}
`;

const Row = styled(RowBase)`
	display: flex !important;
	flex-direction: column;
	div:first-child {
		order: 1;
	}
	${Media.md} {
		flex-direction: row;
		div:first-child {
			order: unset;
		}
	}
`;

const MemberImg = ({ children, ...rest }) => {
	const [element, controls] = useScroll();

	return (
		<MemberImgStyle
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
			{...rest}
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
