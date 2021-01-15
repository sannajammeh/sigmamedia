import Input from '../components/atoms/Inputs';
import Section from '../components/atoms/Section';
import styled from 'styled-components';
import Text from '../components/atoms/Text';
import Header from '../components/atoms/Header';
import RowBase from '../components/atoms/Row';
import Button from '../components/atoms/Button';
import { useState } from 'react';
import Container from '../components/atoms/Container';

const Row = styled(RowBase)`
	flex-wrap: nowrap;
`;

const Contact = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		emailAdress: '',
		title: '',
		companyName: '',
		message: '',
	});

	const handleChange = e => {
		const { value, name } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<ContactSection>
				<Header>
					<Text variant="headline">Stay In Touch</Text>
				</Header>
				<Form method="POST" onSubmit={handleSubmit}>
					<Row>
						<Input
							type="text"
							placeholder="Your Full Name *"
							required
							className="sm"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
						></Input>
						<Input
							type="email"
							placeholder="Your Email Adress *"
							required
							className="sm"
							name="emailAdress"
							value={formData.emailAdress}
							onChange={handleChange}
						></Input>
					</Row>
					<Row>
						<Input
							type="text"
							placeholder="Your Title *"
							required
							className="sm"
							name="title"
							value={formData.title}
							onChange={handleChange}
						></Input>
						<Input
							type="text"
							placeholder="Your Company Name *"
							className="sm"
							name="companyName"
							value={formData.companyName}
							onChange={handleChange}
						></Input>
					</Row>
					<Row>
						<Input
							as="textarea"
							style={{ resize: 'none' }}
							type="text"
							placeholder="Your Message For Us *"
							required
							className="lg"
							name="message"
							value={formData.message}
							onChange={handleChange}
						></Input>
					</Row>
					<Row>
						<center>
							<Button type="submit">Send</Button>
						</center>
					</Row>
				</Form>
			</ContactSection>
		</div>
	);
};

export default Contact;

const ContactSection = styled(Container)``;

const Form = styled.form``;
