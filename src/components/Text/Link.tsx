import { TargetLinkType } from '@typings/TargetLink';

interface Params {
	href: string;
	target?: TargetLinkType;
	style?: React.CSSProperties;
	children?: React.ReactNode;
	highlightColour?: string;
	icon?: boolean;
	underline?: boolean;
}

const LinkSymbol = ({ width = 16, height = 16 }: { width?: number; height?: number }) => (
	<svg width={width} height={height} aria-hidden='true' viewBox='0 0 27 26' style={{ marginLeft: '0.1rem' }}>
		<path
			d='M21,17 C21,16.4477153 21.4477153,16 22,16 C22.5522847,16 23,16.4477153 23,17 L23,23 C23,24.6568542 21.6568542,26 20,26 L9,26 C7.34314575,26 6,24.6568542 6,23 L6,12 C6,10.3431458 7.34314575,9 9,9 L15,9 C15.5522847,9 16,9.44771525 16,10 C16,10.5522847 15.5522847,11 15,11 L9,11 C8.44771525,11 8,11.4477153 8,12 L8,23 C8,23.5522847 8.44771525,24 9,24 L20,24 C20.5522847,24 21,23.5522847 21,23 L21,17 Z'
			fill='currentColor'
		/>
		<path
			d='M24,8 L19,8 C18.4477153,8 18,7.55228475 18,7 C18,6.44771525 18.4477153,6 19,6 L25,6 C25.5522847,6 26,6.44771525 26,7 L26,13 C26,13.5522847 25.5522847,14 25,14 C24.4477153,14 24,13.5522847 24,13 L24,8 Z'
			fill='currentColor'
		/>
		<path
			d='M14.7071068,18.7071068 C14.3165825,19.0976311 13.6834175,19.0976311 13.2928932,18.7071068 C12.9023689,18.3165825 12.9023689,17.6834175 13.2928932,17.2928932 L24.2928932,6.29289322 C24.6834175,5.90236893 25.3165825,5.90236893 25.7071068,6.29289322 C26.0976311,6.68341751 26.0976311,7.31658249 25.7071068,7.70710678 L14.7071068,18.7071068 Z'
			fill='currentColor'
		/>
	</svg>
);

export default ({
	children,
	href,
	style,
	highlightColour = '#56c586',
	target = TargetLinkType.SELF,
	icon = false,
	underline = false,
}: Params) => {
	let processedChildren: React.ReactNode = children;
	let aTarget = target;

	if (typeof children === 'string') {
		if (!href.startsWith('/')) aTarget = TargetLinkType.NEW_PAGE;

		if (highlightColour !== 'none') {
			const parts = children.split(/(\(.*?\))/g).map((part, index) =>
				part.startsWith('(') && part.endsWith(')') ? (
					<span
						key={index}
						style={{
							color: highlightColour,
							textDecoration: 'underline',
							textDecorationStyle: 'solid',
							textDecorationColor: highlightColour,
							textDecorationThickness: '1px',
						}}>
						{part}
					</span>
				) : (
					part
				)
			);

			processedChildren = parts;
		}
	}

	return (
		<a
			href={href}
			target={aTarget}
			style={{ ...style, textDecoration: underline ? 'underline' : undefined }}>
			{processedChildren}
			{icon ? <LinkSymbol /> : aTarget === TargetLinkType.NEW_PAGE ? <LinkSymbol /> : undefined}
		</a>
	);
};
