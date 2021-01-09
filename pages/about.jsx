import styled from 'styled-components';
import Section from '../components/atoms/Section';
import Text from '../components/atoms/Text';
import Header from '../components/atoms/Header';
import Row from '../components/atoms/Row';

const About = () => {
	return (
		<div>
			<Section></Section>
			<AboutSection>
				<Row>
					<MemberImg>
						<img
							src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
							alt=""
						/>
					</MemberImg>
					<MemberText>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolores, repellendus tempora velit illum quos
						voluptatum ipsum hic ratione quo, excepturi distinctio
						dicta rem vel commodi aperiam unde voluptatem debitis
						autem laborum minus nesciunt quod saepe. Reiciendis,
						nobis, vero dolores quidem laborum deserunt quos
						sapiente iure quis consequatur saepe, eaque harum.
					</MemberText>
				</Row>
				<Row>
					<MemberText>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolores, repellendus tempora velit illum quos
						voluptatum ipsum hic ratione quo, excepturi distinctio
						dicta rem vel commodi aperiam unde voluptatem debitis
						autem laborum minus nesciunt quod saepe. Reiciendis,
						nobis, vero dolores quidem laborum deserunt quos
						sapiente iure quis consequatur saepe, eaque harum.
					</MemberText>
					<MemberImg>
						<img
							src="https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
							alt=""
						/>
					</MemberImg>
				</Row>
				<Row>
					<MemberImg>
						<img
							src="https://images.unsplash.com/photo-1533088468076-d1f6bdf16f62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
							alt=""
						/>
					</MemberImg>
					<MemberText>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolores, repellendus tempora velit illum quos
						voluptatum ipsum hic ratione quo, excepturi distinctio
						dicta rem vel commodi aperiam unde voluptatem debitis
						autem laborum minus nesciunt quod saepe. Reiciendis,
						nobis, vero dolores quidem laborum deserunt quos
						sapiente iure quis consequatur saepe, eaque harum.
					</MemberText>
				</Row>
			</AboutSection>
		</div>
	);
};

export default About;

const AboutSection = styled(Section)`
	padding: 0rem !important;
	width: 100% !important;
`;

const MemberImg = styled.div`
	flex: 50%;
	img {
		object-fit: cover;
		width: 100%;
		height: 500px;
	}
`;
const MemberText = styled.div`
	flex: 50%;
`;
