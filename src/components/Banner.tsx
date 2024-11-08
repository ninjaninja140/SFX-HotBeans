import '@css/brand-slides.css';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
	return Array.from(new Map((r.keys().map(r) as string[]).map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(require.context('@content/Banners', false, /\.(png|svg)$/));

export default () => {
	console.log(images);
	return (
		<div
			style={{
				width: '70%',
				height: '35px',
				paddingTop: '2%',
				paddingBottom: '2%',
				backgroundColor: '#5865f2',
				margin: '0 auto',
				left: '0',
				right: '0',
				justifyContent: 'space-between',
				alignItems: 'center',
				color: 'white',
				borderRadius: '8px',
				overflow: 'hidden',
				position: 'relative',
			}}>
			<div
				style={{
					height: '100%',
					width: '100%',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
					animation: 'bannermove 60s linear infinite',
					position: 'absolute',
					display: 'flex',
				}}>
				{images.map((src: string, key: number) => (
					<img
						src={src}
						key={key}
						style={{
							height: '100%',
							flex: '1',
							width: '100%',
							paddingLeft: '5%',
							paddingRight: '5%',
						}}
					/>
				))}
			</div>
		</div>
	);
};

