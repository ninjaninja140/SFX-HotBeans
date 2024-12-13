import '@css/brand-slides.css';

function importAll(globResult: Record<string, () => Promise<unknown>>): string[] {
	const resolvedPaths = Object.keys(globResult);
	return Array.from(new Map(resolvedPaths.map((path) => [path.split('/').pop(), path])).values());
}

const images: string[] = importAll(import.meta.glob('/src/content/Banners/*.{png,svg}'));

export default () => {
	return (
		<div
			id='partners'
			style={{
				width: '70%',
				height: '40px',
				paddingTop: '25px',
				paddingBottom: '25px',
				backgroundColor: '#5865f2',
				margin: '5% auto',
				borderRadius: '8px',
				overflow: 'hidden',
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'nowrap'
			}}>
			<div className='animate' style={{
				display: 'flex',
    			alignItems: 'center',
    			flexWrap: 'nowrap',
    			width: 'max-content',
    			height: '100%'
			}}>
				{images.map((src: string, key: number) => (
					<img src={src} key={key} color='#ffffff' style={{
					    objectFit: 'contain',
   						width:'auto',
    					height: '100%',
    					margin: '0 60px',
					}} />
				))}
			</div>
		</div>
	);
};
