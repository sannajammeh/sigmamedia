import styled from 'styled-components';
import Container from '../atoms/Container';
import Box from '../atoms/Box';
import Text from '../atoms/Text';

const Services = () => {
	return (
		<ServicesContainer as="section">
			<Container style={{ position: 'relative', zIndex: 10 }}>
				<Text
					variant="title"
					style={{ transform: 'translateY(-6rem)' }}
				>
					Services
				</Text>
				<Box
					display={['flex', 'flex', 'flex']}
					mx="-1rem"
					my="-1rem"
					justifyContent="center"
					flexWrap={['wrap', 'wrap', 'nowrap']}
				>
					<ServiceBox>
						<ServiceBoxHeader>
							<BoxAccent bg="primary" />
							<Text color="#6B7C93">GRAPHIC DESIGN</Text>
						</ServiceBoxHeader>
						<ServiceBoxInner>
							<Text>
								Get your custom and exceptional work of UI and
								UX web or app design, illustrations, motion
								graphics for your needs.
							</Text>
						</ServiceBoxInner>
					</ServiceBox>
					<ServiceBox>
						<ServiceBoxHeader>
							<BoxAccent bg="#3ECF8E" />
							<Text color="#6B7C93">DEVELOPMENT</Text>
						</ServiceBoxHeader>
						<ServiceBoxInner>
							<Text>
								Our expert Front-End Developers are ready to
								implement the aesthetic designs into codes using
								the latest technology.
							</Text>
						</ServiceBoxInner>
					</ServiceBox>
					<ServiceBox>
						<ServiceBoxHeader>
							<BoxAccent bg="secondary" />
							<Text color="#6B7C93">APP DEVELOPMENT</Text>
						</ServiceBoxHeader>
						<ServiceBoxInner>
							<Text>
								Need a way to reach out to more customers? Our
								team will turn your existing website into an
								installable app or design and make one.
							</Text>
						</ServiceBoxInner>
					</ServiceBox>
				</Box>
				<Text variant="title">
					Take a glance at the work from our team
				</Text>
			</Container>
		</ServicesContainer>
	);
};

export default Services;

const ServicesContainer = styled.div`
	position: relative;
	min-height: 100vh;
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		content: '';
		clip-path: polygon(0 18%, 100% 0, 100% 87%, 0% 100%);
		background-color: #f6f9fc;
		background: radial-gradient(
			circle at 0 0,
			rgba(103, 114, 229, 0.06),
			#f6f9fc
		);
	}
	padding-bottom: 6rem;
`;

const ServiceBox = styled(Box)`
	min-height: 300px;
	background-color: white;
	box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.05);
	transform: translateY(-30%);
	transition: box-shadow 0.3s ease;
	&:hover {
		box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
	}
	margin-left: 1rem;
	margin-right: 1rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	position: relative;
`;

const ServiceBoxInner = styled.div`
	padding: 1rem;
	padding-left: 2rem;
	padding-right: 2rem;
`;

const ServiceBoxHeader = styled.div`
	margin-top: 2rem;
	padding-left: 2rem;
	display: flex;
	height: 3rem;
	align-items: center;
`;

const BoxAccent = styled(Box)`
	position: absolute;
	left: 0;
	height: 3rem;
	width: 0.5rem;
`;
