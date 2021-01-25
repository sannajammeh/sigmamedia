import { useEffect, useState } from 'react';

export default function useViewport(defaultViewport = null) {
	const [viewport, setViewport] = useState(defaultViewport);
	useEffect(() => {
		setViewport({ width: window.innerWidth, height: window.innerHeight });
		const handleResize = () => {
			setViewport({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return viewport;
}
