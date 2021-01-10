import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useScroll = logger => {
	const controls = useAnimation();
	const [element, view] = useInView({ threshold: 0, rootMargin: '0px' });

	useEffect(() => {
		if (view) {
			logger && logger('showing');
			controls.start('show');
		} else {
			// controls.start('hidden');
		}
	}, [controls, view, logger]);
	return [element, controls, view];
};
