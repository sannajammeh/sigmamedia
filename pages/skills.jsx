import next from 'next';
import styled from 'styled-components';
import Text from '../components/atoms/Text';
import Head from 'next/head';
import Section from '../components/atoms/Section';
import Header from '../components/atoms/Header';
import Footer from '../components/molecules/Footer';

//Framer Motion
import { motion } from 'framer-motion';
import Media from '../utils/media';
import { titleAnim } from '../utils/animation';

const Skills = () => {
	return (
		<div>
			<SkillsSection>
				<Head>
					<link
						href="https://css.gg/arrange-front.css"
						rel="stylesheet"
					></link>
					<link
						href="https://css.gg/smartphone.css"
						rel="stylesheet"
					></link>
					<link
						href="https://css.gg/album.css"
						rel="stylesheet"
					></link>
				</Head>
				<Header>
					<Text variant="headline">Skillsets</Text>
				</Header>
				<SkillsBoxes>
					<SkillsBox>
						<Icon>
							<i class="gg-arrange-front"></i>
						</Icon>
						<Text variant="paragraph">
							Developing blazing fast web applications for
							seamless user interaction.
						</Text>
					</SkillsBox>
					<SkillsBox>
						<Icon>
							<i class="gg-smartphone"></i>
						</Icon>
						<Text variant="paragraph">
							Mobile-first, responsive design layout for all
							devices is a top priority.
						</Text>
					</SkillsBox>
					<SkillsBox>
						<Icon>
							<i class="gg-album"></i>
						</Icon>
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
						<img src="/images/javascript-logo.png" alt="" />
						<img src="/images/node-logo.png" alt="" />
						<img src="/images/html-logo.png" alt="" />
						<img src="/images/sass-logo.png" alt="" />
						<img src="/images/photoshop-logo.png" alt="" />
						<img src="/images/mongodb-logo.png" alt="" />
						<img src="/images/firebase-logo.png" alt="" />
						<img src="/images/jquery-logo.png" alt="" />
						<img src="/images/bootstrap-logo.png" alt="" />
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

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.palette.rose[500]};
	i {
		transform: scale(2);
		margin: 1rem;
	}
	&:hover {
		color: ${({ theme }) => theme.palette.purple[200]};
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
