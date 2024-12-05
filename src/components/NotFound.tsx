import RouteTags from '@components/Meta/Route';

export default () => {
	return (
		<div>
			<RouteTags Location={'404 | Page not found'} />

			<div
				style={{
					height: '100vh',
					justifyContent: 'center',
					justifyItems: 'center',
					alignItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
					paddingLeft: '15%',
					paddingRight: '15%',
					display: 'flex',
					gap: '100px',
				}}>
				<div style={{ flex: '1', textAlign: 'left', containerType: 'inline-size' }}>
					<h1
						style={{
							fontFamily: 'Gotham',
							fontWeight: '800',
							fontSize: '15vw',
							padding: '0',
							margin: '0',
						}}>
						404
					</h1>
				</div>
				<div style={{ flex: '1', textAlign: 'left' }}>
					<h1
						style={{
							fontWeight: '800',
							padding: '0',
							margin: '0',
						}}>
						That's an Error.
					</h1>
					<p style={{ fontSize: '18px', fontWeight: '600' }}>
						<br />
						Sounds like an error which means we couldn't exactly find the page
						you're looking for, maybe it exists, maybe it doesn't, if it does you
						should probably <a href='/contact'>contact us here</a>, or press the
						button below to return to our homepage.
						<br />
						<br />
						<div style={{ display: 'flex', gap: '20px' }}>
							<button
								style={{ width: '100%', flex: '1' }}
								className='blurple-button'
								onClick={() => (window.location.href = '/')}>
								Go Home
							</button>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
