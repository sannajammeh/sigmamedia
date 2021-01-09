import styled from 'styled-components';
import Row from '../atoms/Row';
import Container from '../atoms/Container';
import Head from 'next/head';
import Text from '../atoms/Text';
import Media from '../../utils/media';

const Footer = () => {
	return (
		<FooterSection>
			<Head>
				<link href="https://css.gg/pin.css" rel="stylesheet"></link>
				<link href="https://css.gg/phone.css" rel="stylesheet"></link>
				<link href="https://css.gg/mail.css" rel="stylesheet"></link>
				<link
					href="https://css.gg/instagram.css"
					rel="stylesheet"
				></link>
			</Head>
			<Container>
				<Row>
					<FooterColumn>
						<Text variant="sub-heading">Social media</Text>
						<FooterRow className="mobile">
							<Icon>
								<i className="gg-instagram"></i>
							</Icon>
							<Icon>
								<i className="gg-instagram"></i>
							</Icon>
							<Icon>
								<i className="gg-instagram"></i>
							</Icon>
						</FooterRow>
					</FooterColumn>
					<FooterColumn>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Aut, ex?
						</p>
					</FooterColumn>
					<FooterColumn>
						<FooterRow className="mobile">
							<Icon>
								<i className="gg-pin"></i>
							</Icon>
							<Text variant="paragraph">
								<a
									href="https://www.google.com/maps/place/Holmestrandgata+4,+0468+Oslo/data=!4m2!3m1!1s0x46416e11bfd564f5:0x62dbd3befcdb0090?sa=X&ved=2ahUKEwiJy5f97ozuAhXklosKHaPkARIQ8gEwAHoECAQQAQ"
									target="_blank"
								>
									Holmestrandgata 4, 0468 Oslo
								</a>
							</Text>
						</FooterRow>
						<FooterRow className="mobile">
							<Icon>
								<i className="gg-phone"></i>
							</Icon>
							<Text variant="paragraph">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Hic, dignissimos.
							</Text>
						</FooterRow>
						<FooterRow className="mobile">
							<Icon>
								<i className="gg-mail"></i>
							</Icon>
							<Text variant="paragraph">
								<a href="mailto:Sigmamedialtd@gmail.com?subject=New Website">
									Sigmamedialtd@gmail.com
								</a>
							</Text>
						</FooterRow>
					</FooterColumn>
				</Row>
			</Container>
		</FooterSection>
	);
};

export default Footer;

const FooterSection = styled.footer`
	background: ${({ theme }) => theme.colors.bg};
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
`;

const FooterColumn = styled.div`
	flex: 33%;
	p {
		padding: 2rem;
	}
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.palette.purple[400]};
	i {
		transform: scale(1.5);
		margin: 1rem;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

const FooterRow = styled(Row)`
	display: flex !important;
	align-items: center;
	justify-content: center;
	&.mobile {
		justify-content: flex-start !important;
	}
	&.spacing {
		//margin-left: 2rem;
	}
`;
