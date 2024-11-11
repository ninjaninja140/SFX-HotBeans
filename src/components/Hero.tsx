import { IconType } from 'react-icons';

interface HeroParams {
	style?: React.CSSProperties;
	children: React.ReactNode;
	title?: string;
	icon?: IconType;
	direction?: string;
}

export default (Props: HeroParams) => {
	let defaults: React.CSSProperties = {
		flex: '1',
		paddingLeft: '15%',
		textAlign: 'left',
	};

	if (Props.direction)
		if (Props.direction === 'left') {
			defaults.justifyContent = 'flex-end';
			defaults.alignItems = 'center';
			defaults.justifyItems = 'center';
		} else {
			defaults.paddingRight = '15%';
			defaults.justifyContent = 'flex-start';
			defaults.alignItems = 'left';
		}
	else {
		defaults.justifyContent = 'flex-end';
		defaults.alignItems = 'center';
		defaults.justifyItems = 'center';
	}

	const Icon: () => JSX.Element | undefined = (): JSX.Element | undefined => {
		if (Props.icon)
			return (
				<div style={defaults}>
					<Props.icon
						className={`icon-3d${Props.direction === 'right' ? '' : '-left'}`}
						fill='#5865f2'
						style={{ height: '100%', width: '100%' }}
					/>
				</div>
			);
		else return undefined;
	};

	return (
		<div style={{ minHeight: '70vh', display: 'flex', margin: '5% auto', ...Props.style }}>
			{Props.icon ? Props.direction === 'left' || !Props.direction ? <Icon /> : undefined : undefined}
			<div
				style={{
					flex: '2',
					paddingRight: '15%',
					paddingLeft: '15%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				{Props.title ? <h1>{Props.title}</h1> : undefined}
				<p>{Props.children}</p>
			</div>
			{Props.icon ? Props.direction === 'right' ? <Icon /> : undefined : undefined}
		</div>
	);
};

