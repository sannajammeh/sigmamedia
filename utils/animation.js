export const scrollReveal = {
	hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export const titleAnim = {
	hidden: { y: 200 },
	show: {
		y: 0,
		transition: { duration: 0.75, ease: 'easeOut' },
	},
};
