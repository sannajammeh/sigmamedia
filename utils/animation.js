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
	hidden: { y: 200, opacity: 0 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
};

export const listAnim = {
	hidden: {
		transition: {
			when: 'afterChildren',
		},
	},
	show: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
};

export const fade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { ease: 'easeOut', duration: 0.75 },
	},
};
