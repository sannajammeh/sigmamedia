export const createPortalRoot = rootID => {
	if (typeof window === 'undefined') return null;
	const prevRoot = document.getElementById(rootID);
	if (prevRoot) return prevRoot;
	const root = document.createElement('div');
	root.id = rootID;
	document.body.appendChild(root);
	return root;
};
