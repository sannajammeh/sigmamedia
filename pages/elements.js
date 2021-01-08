import styled from 'styled-components';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import Container from '../components/atoms/Container';
import Box from '../components/atoms/Box';

const Elements = () => {
	return (
		<Container>
			<Text as="h1" mb="4">
				Elements
			</Text>
			<Showcase n="Typography"></Showcase>
			<Showcase n="Buttons">
				<ButtonGrid>
					<div>
						<pre>
							<code>
								variant="primary" <br />
								or none
							</code>
						</pre>
						<Button>Default</Button>
					</div>
					<div>
						<pre>
							<code>
								variant="outlined" <br />
							</code>
						</pre>
						<Button variant="outlined">Outlined</Button>
					</div>
					<div>
						<pre>
							<code>
								variant="primary" <br />
							</code>
						</pre>

						<Box bg="#69ddf7" padding="2">
							<Button variant="outlined-dark">Hello</Button>
						</Box>
					</div>
				</ButtonGrid>
			</Showcase>
		</Container>
	);
};

export default Elements;

const ButtonGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	align-items: center;
`;

const Showcase = styled.div`
	position: relative;
	margin-bottom: 3rem;
	padding: 2rem 1rem;
	border-radius: 4px;
	&:hover {
		border: 1px dashed #e62e5c;
		&::before {
			content: '${({ n }) => n || ''}';
			position: absolute;
			top: -2.5rem;
			right: 2rem;
			padding: 2px 6px;
			background-color: #e62e5c;
			border-radius: 4px;
			text-align: center;
			font-weight: 500;
			font-size: 0.9rem;
			z-index: 2;
		}
		&::after {
			content: '';
			position: absolute;
			right: 3rem;
			top: -1.3rem;
			clip-path: polygon(100% 0, 0 0, 49% 61%);
			background-color: #e62e5c;
			width: 1rem;
			height: 1rem;
			z-index: 1;
		}
	}
`;
