import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Shuffle from 'shufflejs';
import { AnimatePresence, motion } from 'framer-motion';
import Row from '../atoms/Row';
import css from '@styled-system/css';
import Media from '../../utils/media';

const Filtergrid = () => {
	const sizeRef = useRef(null);
	const shuffleRef = useRef(null);
	const gridContainer = useRef(null);
	const [category, setCategory] = useState('');
	const results = category
		? images.filter(image => image.category === category)
		: images;

	const handleClick = c => {
		if (c === category) {
			return setCategory('');
		}
		setCategory(c);
	};

	useEffect(() => {
		const { current: shuffle } = shuffleRef;
		if (!shuffle) return;
		shuffle.filter(category);
	}, [category, shuffleRef]);

	useEffect(() => {
		if (!gridContainer.current) return;
		if (!sizeRef.current) return;

		const shuffleInstance = new Shuffle(gridContainer.current, {
			itemSelector: '.grid-item',
			sizer: sizeRef.current,
		});

		shuffleRef.current = shuffleInstance;

		return () => {
			shuffleInstance.destroy();
		};
	}, [gridContainer, sizeRef]);

	return (
		<div>
			<ButtonRow>
				<GridButton
					active={category === 'website'}
					px="2"
					py="1"
					onClick={() => handleClick('website')}
				>
					Websites
				</GridButton>
				<GridButton
					active={category === 'project'}
					px="2"
					py="1"
					onClick={() => handleClick('project')}
				>
					Projects
				</GridButton>
				<GridButton
					active={category === 'application'}
					px="2"
					py="1"
					onClick={() => handleClick('application')}
				>
					Applications
				</GridButton>
			</ButtonRow>
			<ImgGrid ref={gridContainer} className="grid-container">
				{images.map((image, key) => (
					<Image
						ref={key === 0 ? sizeRef : undefined}
						className="grid-item"
						key={key}
						src={image.photoUrl}
						data-groups={`["${image.category}"]`}
					/>
				))}
			</ImgGrid>
		</div>
	);
};

export default Filtergrid;

const images = [
	{
		url: 'www.youtube.com',
		photoUrl:
			'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		id: 'id1',
		category: 'website',
	},
	{
		photoUrl:
			'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		id: 'id5',
		category: 'application',
	},
	{
		photoUrl:
			'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		id: 'id2',
		category: 'project',
	},
	{
		photoUrl:
			'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
		id: 'id3',
		category: 'website',
	},
	{
		photoUrl:
			'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		id: 'id4',
		category: 'project',
	},
	{
		photoUrl:
			'https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1941&q=80',
		id: 'id6',
		category: 'application',
	},
];

const Image = styled.img`
	${Media.md} {
		height: 250px;
		width: 33%;
	}
	height: 300px;
	width: 100%;
	object-fit: cover;
	padding: 1rem;
	transition: all 0.2s ease;
	&:hover {
		/* transform: scale(1.1) !important; */
		cursor: pointer;
	}
`;

const ImgGrid = styled.div`
	display: block;
	${Media.md} {
		display: flex;
		flex-wrap: wrap;
		min-height: calc((250px + 1rem) * 2);
	}
`;

const GridButton = styled(Button)`
	margin: 1rem;
	padding: 0.5rem;
	border-radius: 2px;
	${({ active, theme }) => {
		console.log(active);
		return active
			? `
					border-color: ${theme.palette.purple[600]};
                    background: transparent;
			  `
			: '';
	}}
`;

const ButtonRow = styled(Row)`
	display: flex !important;
	align-items: center !important;
	justify-content: center !important;
	flex-wrap: wrap;
	${Media.w('410px')} {
		flex-wrap: nowrap;
	}
`;
