import { IoChevronDown, IoPeople } from 'react-icons/io5';

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	return (
		<div style={{ minHeight: '70vh', display: 'flex', margin: '5% auto' }}>
			<div
				style={{
					...defaults,
					flex: '2.5',
					paddingLeft: '15%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>About us</h1>
				<p>
					Since I've got your attention, I'd like to formally welcome you to our website. On this page, you can learn all
					there is to know about HotBeans Website Development, its history, what it stands
					for, how we tend to operate and more.
				</p>
				<IoChevronDown
					style={{
						color: '#5865f2',
						height: '30px',
						width: '100%',
						marginTop: '40px',
						cursor: 'pointer',
					}}
					onClick={() => {
						var el = document.getElementById('who-are-we');
						el!.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
							inline: 'center',
						});
					}}
				/>
			</div>
			<div
				style={{
					...defaults,
					paddingRight: '15%',
					paddingLeft: '10%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					textAlign: 'left',
				}}>
				<IoPeople
					className='icon-3d'
					fill='#5865f2'
					color='#5865f2'
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
		</div>
	);
};
