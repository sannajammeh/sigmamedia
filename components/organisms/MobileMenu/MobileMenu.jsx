import { createPortal } from 'react-dom';
import { useIsClient } from '../../../hooks/client';
import { createPortalRoot } from '../../../utils/portal';
import { useIsMobile } from '../../../hooks/useMediaQuery';

const root_id = 'mobile-menu-root';
const root = createPortalRoot(root_id);

const MobileMenuPortal = () => {
	const isClient = useIsClient();
	const isMobile = useIsMobile();

	if (!isMobile) return null;
	return isClient ? createPortal(<MobileMenu />, root) : null;
};

export default MobileMenuPortal;

const MobileMenu = () => {
	return <div>Hello</div>;
};
