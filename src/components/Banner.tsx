import '@css/brand-slides.css';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
	return Array.from(new Map((r.keys().map(r) as string[]).map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(require.context('@content/Banners', false, /\.(png|svg)$/));

export default () => {
	return (
		<div
			style={{
				width: '70%',
				height: '35px',
				paddingTop: '2%',
				paddingBottom: '2%',
				backgroundColor: '#5865f2',
				margin: '5% auto',
				borderRadius: '8px',
				overflow: 'hidden',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<div className='banner-content'>
				{images.concat(images).map((src: string, key: number) => (
					<img src={src} key={key} />
				))}
			</div>
		</div>
	);
};

