import { IoChevronDown } from 'react-icons/io5';

export default ({
	id,
	colour = '#5865f2',
	styles = {},
}: {
	id: string;
	colour?: string;
	styles?: React.CSSProperties;
}) => (
	<IoChevronDown
		style={{
			color: colour,
			height: '30px',
			width: '100%',
			marginTop: '40px',
			cursor: 'pointer',
			...styles,
		}}
		onClick={() =>
			document
				.getElementById(id)!
				.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
		}
	/>
);
