
import Input from '../components/atoms/Inputs'
import Section from '../components/atoms/Section'
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactSection>
            <Input></Input>
        </ContactSection>
    )
}

export default Contact;

const ContactSection = styled(Section)``;
