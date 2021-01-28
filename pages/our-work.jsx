import Container from '../components/atoms/Container';
import Header from '../components/atoms/Header';
import Layout from '../components/atoms/Layout';
import Text from '../components/atoms/Text';
import Filtergrid from '../components/organisms/Filtergrid';

const OurWork = () => {
	return (
		<Layout title="Sigma Media | Our Work">
			<Header>
				<Text variant="headline">Our Work</Text>
			</Header>
			<Container>
				<Filtergrid />
			</Container>
		</Layout>
	);
};

export default OurWork;
