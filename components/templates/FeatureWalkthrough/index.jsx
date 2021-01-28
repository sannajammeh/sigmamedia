import LandingSection, {
	LandingSectionHeader,
} from '../../atoms/LandingSection';
import Text from '../../atoms/Text';
import Box from '../../atoms/Box';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Media from '../../../utils/media';

import { RiPagesLine } from 'react-icons/ri';
import { FaRegEye, FaChartLine } from 'react-icons/fa';

const FeatureWalkthrough = () => {
	return (
		<LandingSection style={{ paddingBottom: 200 }}>
			<LandingSectionHeader>
				<Text variant="second-headline" textAlign="center" mb="1">
					YOUR BUSINESS, COMPLETELY ONLINE
				</Text>
				<Text variant="subtitle" textAlign="center">
					Need a website, design or ecommerce platform? See what Sigma
					provides.
				</Text>
			</LandingSectionHeader>
			<Box
				alignItems="center"
				justifyContent="space-between"
				display={['block', 'block', 'flex']}
			>
				<FeatureImage src="/images/building-website.svg" />
				<div>
					<Feature mb={['4', '4', '5']}>
						<FeatureTitle center>
							<Box color="secondary">
								<RiPagesLine size="2rem" />
							</Box>
							<Text
								ml={['2', '2']}
								variant="subtitle"
								fontWeight="medium"
							>
								Professional website
							</Text>
						</FeatureTitle>
						<FeatureText mt="1">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Repellendus, a? Dolore, iure. Quis commodi
							tenetur recusandae iste incidunt quas expedita,
							doloribus deserunt autem voluptatum quisquam.
						</FeatureText>
					</Feature>
					<Feature mb={['4', '4', '5']}>
						<FeatureTitle>
							<Box color="secondary">
								<FaRegEye size="2rem" />
							</Box>

							<Text
								ml={['2', '2']}
								variant="subtitle"
								fontWeight="medium"
							>
								Your service, product or information visible to
								the market
							</Text>
						</FeatureTitle>
						<FeatureText mt="1">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Repellendus, a? Dolore, iure. Quis commodi
							tenetur recusandae iste incidunt quas expedita,
							doloribus deserunt autem voluptatum quisquam.
						</FeatureText>
					</Feature>
					<Feature>
						<FeatureTitle center>
							<Box color="secondary">
								<FaChartLine size="2rem" />
							</Box>
							<Text
								ml={['2', '2']}
								variant="subtitle"
								fontWeight="medium"
							>
								Watch your profits grow
							</Text>
						</FeatureTitle>
						<FeatureText mt="1">
							We deliver the highest converting websites for every
							type of business. Get a solution that attracts
							customers and watch your profits grow
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
	height: 300px;
	background-position: top;
	width: 100%;
	object-fit: contain;
	margin-bottom: 1rem;
	${Media.md} {
		height: 600px;
		width: 60%;
		background-position: center;
	}
`;

const Feature = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: center;
	${Media.md} {
		align-items: flex-start;
	}
	max-width: 400px;
	margin-left: auto;
	margin-right: auto;
`;

const FeatureText = styled(Text)`
	line-height: 1.8;
	font-size: 1.1rem;
	text-align: left;
	${Media.md} {
		text-align: left;
	}
`;

FeatureText.defaultProps = {
	variant: 'light',
};

const FeatureTitle = styled.div`
	display: flex;
	justify-content: flex-start;
	padding-left: 1rem;
	width: 100%;
	${Media.md} {
		padding-left: 0rem;

		justify-content: flex-start;
	}
	/* align-items: center; */
	${({ center }) => (center ? 'align-items: center;' : '')}
`;

const FeatureIcon = ({ name, mt, color }) => (
	<Box mt={mt} color={color}>
		<Icon scale={2} name={name} />
	</Box>
);
