import { IoChevronDown } from 'react-icons/io5';

export default ({
	id,
	colour = '#5865f2',
	children,
	textStyle = {},
	chevronStyle = {},
	styles = {},
}: {
	id: string;
	colour?: string;
	styles?: React.CSSProperties;
	textStyle?: React.CSSProperties;
	chevronStyle?: React.CSSProperties;
	children?: React.ReactNode;
}) => (
	<div
		style={{
			...styles,
			height: '30px',
			width: '100%',
			marginTop: '40px',
			display: 'flex',
			cursor: 'pointer',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center',
			justifyItems: 'center',
		}}>
		{children ? (
			<p
				style={{
					color: colour,
					height: '100%',
					fontWeight: '550',
					marginRight: '5px',
					...textStyle,
				}}>
				{children}
			</p>
		) : undefined}
		<IoChevronDown
			style={{
				color: colour,
				height: '100%',
				width: 'auto',
				...chevronStyle,
			}}
			onClick={() => {
				if (document.getElementById(id))
					return document.getElementById(id)!.scrollIntoView({
						behavior: 'smooth',
						block: 'center',
						inline: 'center',
					});

				return;
			}}
		/>
	</div>
);
