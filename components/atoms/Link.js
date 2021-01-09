import LinkBase from 'next/link';
import Text from './Text';

const Link = ({ href, children, pointer = false, ...props }) => {
	return (
		<LinkBase href={href}>
			<Text
				as="a"
				{...props}
				style={{ ...(pointer ? pointerStyle : undefined) }}
			>
				{children}
			</Text>
		</LinkBase>
	);
};

export default Link;

const pointerStyle = {
	cursor: 'pointer',
};
