import styled from 'styled-components';
import Text from '../components/atoms/Text';
import Head from 'next/head';
import Section from '../components/atoms/Section';
import Header from '../components/atoms/Header';
import Footer from '../components/molecules/Footer';
import Icon from '../components/atoms/Icon';

//Framer Motion
import { motion } from 'framer-motion';
import Media from '../utils/media';
import { titleAnim } from '../utils/animation';

const Skills = () => {
	return (
		<div>
			<SkillsSection>
				<Header>
					<div>
						<Text variant="headline">
							<motion.h2
								style={{ margin: 0, padding: 0 }}
								variants={titleAnim}
							>
								Skillsets
							</motion.h2>
						</Text>
						<Text textAlign="center" mb="4" variant="sub-heading">
							These are our focus areas
						</Text>
					</div>
				</Header>
				<SkillsBoxes>
					<SkillsBox>
						<IconStyle>
							<Icon name="arrange-front"></Icon>
						</IconStyle>
						<Text variant="paragraph">
							Developing blazing fast web applications for
							seamless user interaction.
						</Text>
					</SkillsBox>
					<SkillsBox>
						<IconStyle>
							<Icon name="smartphone"></Icon>
						</IconStyle>
						<Text variant="paragraph">
							Mobile-first, responsive design layout for all
							devices is a top priority.
						</Text>
					</SkillsBox>
					<SkillsBox>
						<IconStyle>
							<Icon name="album"></Icon>
						</IconStyle>
						<Text variant="paragraph">
							Constantly continues to learn new technologies and
							keeping up-to-date with the freshest trends.
						</Text>
					</SkillsBox>
				</SkillsBoxes>
				<SkillsImages>
					<center>
						<a href="https://reactjs.org/" target="_blank">
							<img src="/images/react-logo.png" alt="React" />
						</a>
						<a href="https://www.javascript.com/">
							<img src="/images/javascript-logo.png" alt="" />
						</a>
						<a href="https://nodejs.org/en/about/" target="_blank">
							<img src="/images/node-logo.png" alt="" />
						</a>
						<a href="https://html.com/" target="_blank">
							<img src="/images/html-logo.png" alt="" />
						</a>
						<a href="https://sass-lang.com/" target="_blank">
							<img src="/images/sass-logo.png" alt="" />
						</a>
						<a
							href="https://www.adobe.com/no/products/photoshop.html?sdid=8JD95K3Q&mv=search&ef_id=Cj0KCQiA6Or_BRC_ARIsAPzuer-S8VJhkYnGLKeeI9RRb1D4L8kukRGqjlZQP9D_WpmvuwRjNc53ijAaAqt4EALw_wcB:G:s&s_kwcid=AL!3085!3!442287443495!e!!g!!photoshop!1471316782!58669001444&gclid=Cj0KCQiA6Or_BRC_ARIsAPzuer-S8VJhkYnGLKeeI9RRb1D4L8kukRGqjlZQP9D_WpmvuwRjNc53ijAaAqt4EALw_wcB"
							target="_blank"
						>
							<img src="/images/photoshop-logo.png" alt="" />
						</a>
						<a
							href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_emea_norway_search_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=10947982929&gclid=Cj0KCQiA6Or_BRC_ARIsAPzuer-wf6GdJVIDISN7b4kVD_pnlDoyxeyAHDeKo1j0mK3wxqIUFWfNl5UaAmK3EALw_wcB"
							target="_blank"
						>
							<img src="/images/mongodb-logo.png" alt="" />
						</a>
						<a
							href="https://firebase.google.com/?gclid=Cj0KCQiA6Or_BRC_ARIsAPzuer-BiN1SljXmcNXn-k3cxNKyvvUvDYB4Lzi99WJ5D75nImbkLDWZ-p8aAmE2EALw_wcB"
							target="_blank"
						>
							<img src="/images/firebase-logo.png" alt="" />
						</a>
						<a href="https://jquery.com/" target="_blank">
							<img src="/images/jquery-logo.png" alt="" />
						</a>
						<a href="https://getbootstrap.com/" target="_blank">
							<img src="/images/bootstrap-logo.png" alt="" />
						</a>
					</center>
				</SkillsImages>
			</SkillsSection>
		</div>
	);
};

// SCSS

const SkillsSection = styled(Section)``;

const SkillsBoxes = styled.div`
	display: block;
	${Media.md} {
		display: flex;
		padding: 2rem 0;
	}
`;

const SkillsBox = styled.div`
	flex: 33%;
	p {
		padding: 2rem;
		text-align: center;
	}
`;

const IconStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.palette.rose[500]};
	i {
		transform: scale(2);
		margin: 1rem;
	}
`;

const SkillsImages = styled.div`
	padding: 3rem 2rem;
	${Media.md} {
		padding: 2rem 0;
	}
	img {
		width: 60px;
		height: 60px;
		margin: 1rem;
		border-radius: 5%;
		transition: all 0.3s ease;
		&:hover {
			transform: translatey(-10px);
			cursor: pointer;
		}
	}
`;

export default Skills;
