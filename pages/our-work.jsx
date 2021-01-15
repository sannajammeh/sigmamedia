import styled from 'styled-components';
import Container from '../components/atoms/Container';
import Header from '../components/atoms/Header';
import Text from '../components/atoms/Text';
import Filtergrid from '../components/organisms/Filtergrid';

const OurWork = () => {
	return (
		<div>
			<Header>
				<Text variant="headline">Our Work</Text>
			</Header>
			<Container>
				<Filtergrid />
			</Container>
		</div>
	);
};

export default OurWork;
