import LandingSection, {
	LandingSectionHeader,
} from '../../atoms/LandingSection';
import Text from '../../atoms/Text';
import Box from '../../atoms/Box';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

const FeatureWalkthrough = () => {
	return (
		<LandingSection>
			<LandingSectionHeader>
				<Text variant="second-headline" textAlign="center" mb="2">
					YOUR BUSINESS, COMPLETELY ONLINE
				</Text>
				<Text variant="subtitle" textAlign="center">
					Need a website, design or ecommerce platform? See what
					{' <Sigma />'} provides.
				</Text>
			</LandingSectionHeader>
			<Box display="flex" justifyContent="space-between">
				<FeatureImage src="/images/building-website.svg" />
				<div>
					<Feature mb="5">
						<FeatureTitle center>
							<FeatureIcon
								color="secondary"
								name="collage"
								scale={2}
							/>{' '}
							<Text ml="4" variant="subtitle" fontWeight="medium">
								Professional website
							</Text>
						</FeatureTitle>
						<FeatureText mt="3">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Repellendus, a? Dolore, iure. Quis commodi
							tenetur recusandae iste incidunt quas expedita,
							doloribus deserunt autem voluptatum quisquam.
						</FeatureText>
					</Feature>
					<Feature mb="5">
						<FeatureTitle>
							<FeatureIcon
								color="secondary"
								mt="3"
								name="browse"
								scale={2}
							/>{' '}
							<Text ml="4" variant="subtitle" fontWeight="medium">
								Your service, product or information visible to
								the market
							</Text>
						</FeatureTitle>
						<FeatureText mt="3">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Repellendus, a? Dolore, iure. Quis commodi
							tenetur recusandae iste incidunt quas expedita,
							doloribus deserunt autem voluptatum quisquam.
						</FeatureText>
					</Feature>
					<Feature>
						<FeatureTitle>
							<FeatureIcon
								color="secondary"
								mt="3"
								name="chart"
								scale={2}
							/>{' '}
							<Text ml="4" variant="subtitle" fontWeight="medium">
								Lorem ipsum dolor sit amet.
							</Text>
						</FeatureTitle>
						<FeatureText mt="3">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Repellendus, a? Dolore, iure. Quis commodi
							tenetur recusandae iste incidunt quas expedita,
							doloribus deserunt autem voluptatum quisquam.
						</FeatureText>
					</Feature>
				</div>
			</Box>
		</LandingSection>
	);
};

export default FeatureWalkthrough;

const FeatureImage = styled.img`
	border-radius: 4px;
	height: 600px;
	width: 50%;
	object-fit: contain;
`;

const Feature = styled(Box)`
	max-width: 400px;
`;

const FeatureText = styled(Text)`
	line-height: 1.8;
	font-size: 1.1rem;
`;

FeatureText.defaultProps = {
	variant: 'light',
};

const FeatureTitle = styled.div`
	display: flex;
	/* align-items: center; */
	${({ center }) => (center ? 'align-items: center;' : '')}
`;

const FeatureIcon = ({ name, mt, color }) => (
	<Box mt={mt} color={color}>
		<Icon scale={2} name={name} />
	</Box>
);
