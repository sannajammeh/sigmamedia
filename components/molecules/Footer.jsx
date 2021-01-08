import styled from 'styled-components';
import Row from '../atoms/Row';
import Container from '../atoms/Container';
import Head from 'next/head';
import Text from "../atoms/Text";
import Media from '../../utils/media';

const Footer = () => {
    return (
        <FooterSection>
            <Head>
                <link href='https://css.gg/pin.css' rel='stylesheet'></link>
                <link href='https://css.gg/phone.css' rel='stylesheet'></link>
                <link href='https://css.gg/mail.css' rel='stylesheet'></link>
                <link href='https://css.gg/instagram.css' rel='stylesheet'></link>
            </Head>
            <Container>
            <Row>
                <FooterColumn>
                    <Text variant="sub-heading">Social media</Text>
                    <Row>
                        <Icon><i class="gg-instagram"></i></Icon>
                        <Icon><i class="gg-instagram"></i></Icon>
                        <Icon><i class="gg-instagram"></i></Icon>
                    </Row>
                </FooterColumn>
                <FooterColumn>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, ex?</p>
                </FooterColumn>
                <FooterColumn>
                    <Row>
                        <Icon><i class="gg-pin"></i></Icon>
                        <Text variant="paragraph"><a href="https://www.google.com/maps/place/Holmestrandgata+4,+0468+Oslo/data=!4m2!3m1!1s0x46416e11bfd564f5:0x62dbd3befcdb0090?sa=X&ved=2ahUKEwiJy5f97ozuAhXklosKHaPkARIQ8gEwAHoECAQQAQ" target="_blank">Holmestrandgata 4, 0468 Oslo</a></Text>
                    </Row>
                    <Row>
                        <Icon><i class="gg-phone"></i></Icon>
                        <Text variant="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dignissimos.</Text>
                    </Row>
                    <Row>
                        <Icon><i class="gg-mail"></i></Icon>
                        <Text variant="paragraph"><a href="mailto:Sigmamedialtd@gmail.com?subject=New Website">Sigmamedialtd@gmail.com</a></Text>
                    </Row>
                </FooterColumn>
            </Row>
            </Container>
        </FooterSection>
    )
}

export default Footer;

const FooterSection = styled.footer`
    background: ${({theme}) => theme.colors.bg};
    border-top: 1px solid whitesmoke;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
`;

const FooterColumn = styled.div`
    flex: 33%;
    p {
        padding: 2rem;
    }
    ${Media.md} {
        p {
            text-align: center;
        }
    }
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.palette.purple[400]};
    i {
        transform: scale(1.5);
        margin: 1rem;
        &:hover {
            transform: scale(1.2);
        }
    }
`
