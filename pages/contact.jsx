import Input from '../components/atoms/Inputs';
import Section from '../components/atoms/Section';
import styled from 'styled-components';
import Text from '../components/atoms/Text';
import Header from '../components/atoms/Header';
import Row from '../components/atoms/Row';
import Button from '../components/atoms/Button';

const Contact = () => {
	return (
		<div>
			<ContactSection>
				<Header>
					<Text variant="headline">Stay In Touch</Text>
				</Header>
				<Form method="POST">
					<Row>
						<Input
							type="text"
							placeholder="Your Full Name *"
							required
							className="sm"
						></Input>
						<Input
							type="email"
							placeholder="Your Email Adress *"
							required
							className="sm"
						></Input>
					</Row>
					<Row>
						<Input
							type="text"
							placeholder="Your Title *"
							required
							className="sm"
						></Input>
						<Input
							type="text"
							placeholder="Your Company Name *"
							className="sm"
						></Input>
					</Row>
					<Row>
						<Input
							as="textarea"
							style="Resize: none;"
							type="text"
							placeholder="Your Message For Us *"
							required
							className="lg"
						></Input>
					</Row>
					<Row>
						<Button type="submit">Send</Button>
					</Row>
				</Form>
			</ContactSection>
		</div>
	);
};

export default Contact;

const ContactSection = styled(Section)`
	width: 80%;
`;

const Form = styled.form``;
