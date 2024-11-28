import '@css/brand-slides.css';

function importAll(globResult: Record<string, () => Promise<unknown>>): string[] {
	const resolvedPaths = Object.keys(globResult);
	return Array.from(new Map(resolvedPaths.map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(import.meta.glob('/src/content/Banners/*.{png,svg}'));

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
					<img src={src} key={key} color='#ffffff' />
				))}
			</div>
		</div>
	);
};
