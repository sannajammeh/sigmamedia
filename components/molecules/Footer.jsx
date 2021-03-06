import styled from 'styled-components';
import Row from '../atoms/Row';
import Container from '../atoms/Container';
import Head from 'next/head';
import Text from '../atoms/Text';
import Media from '../../utils/media';
import Icon from '../atoms/Icon';

const Footer = () => {
	return (
		<FooterSection>
			<Container>
				<Row>
					<FooterColumn className="mobile">
						<MobileRow>
							<center>
								<Text variant="sub-heading">Social media</Text>
							</center>
							<FooterRow className="mobile">
								<IconStyle>
									<Icon name="instagram"></Icon>
								</IconStyle>
								<IconStyle>
									<Icon name="facebook"></Icon>
								</IconStyle>
								<IconStyle>
									<Icon name="youtube"></Icon>
								</IconStyle>
							</FooterRow>
						</MobileRow>
					</FooterColumn>
					<FooterColumn>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Aut, ex?
						</p>
					</FooterColumn>
					<FooterColumn>
						<FooterRow className="mobile">
							<IconStyle>
								<Icon name="pin"></Icon>
							</IconStyle>
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
							<IconStyle>
								<Icon name="phone"></Icon>
							</IconStyle>
							<Text variant="paragraph">Lorem ipsum dolor</Text>
						</FooterRow>
						<FooterRow className="mobile">
							<IconStyle>
								<Icon name="mail"></Icon>
							</IconStyle>
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
	padding: 1rem 0;
	display: flex;
	justify-content: space-between;
`;

const FooterColumn = styled.div`
	flex: 33%;
	p {
		padding: 2rem;
	}
`;

const IconStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.palette.rose[500]};
	i {
		transform: scale(1.5);
		transition: transform 0.3s ease;
		margin: 1rem;
		&:hover {
			transform: scale(1.4);
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
`;

const MobileRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	${Media.md} {
		flex-direction: column;
	}
`;
