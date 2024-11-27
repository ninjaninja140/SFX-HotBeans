import RouteTags from '@components/Meta/Route';

export default () => {
	return (
		<div>
			<RouteTags
				Location={'401 Unauthorised'}
				Description={'This page cannot be viewed at the current time, maybe it is locked?'}
			/>

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
				<div style={{ flex: '1', textAlign: 'left' }}>
					<h1
						style={{
							fontFamily: 'Gotham',
							fontWeight: '800',
							fontSize: '300px',
							padding: '0',
							margin: '0',
						}}>
						401
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
						Sounds like an error which means you aren't allowed to see this page at
						the moment, its most likely under development. But, if you can normally,
						you should probably <a href='/contact'>contact us here</a>, or press the
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

