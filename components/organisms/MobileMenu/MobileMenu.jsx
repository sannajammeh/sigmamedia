import { createPortal } from 'react-dom';
import { useIsClient } from '../../../hooks/client';
import { createPortalRoot } from '../../../utils/portal';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import { useEffect, useState } from 'react';

const root_id = 'mobile-menu-root';
const root = createPortalRoot(root_id);

const MobileMenuPortal = () => {
	const [show, setShow] = useState(false);
	const isMobile = useIsMobile();

	useEffect(() => {
		setShow(true);
	}, [show]);
	if (!show || !isMobile) return null;

	return createPortal(<MobileMenu />, root);
};

export default MobileMenuPortal;

const MobileMenu = () => {
	return <div>Hello</div>;
};
