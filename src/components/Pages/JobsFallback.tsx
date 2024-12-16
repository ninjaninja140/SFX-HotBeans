import RouteTags from '@components/Meta/Route';
import Link from '@components/Text/Link';

export default () => {
	return (
		<div>
			<RouteTags
				Location={'204 | Job not found.'}
				Description='Appears that this page may not exist, or, you might not be able to view it!'
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
				<div style={{ flex: '1', textAlign: 'left', containerType: 'inline-size' }}>
					<h1
						style={{
							fontFamily: 'Gotham',
							fontWeight: '800',
							fontSize: '15vw',
							padding: '0',
							margin: '0',
						}}>
						204
					</h1>
				</div>
				<div style={{ flex: '1', textAlign: 'left' }}>
					<h1
						style={{
							fontWeight: '800',
							padding: '0',
							margin: '0',
						}}>
						Something's not quite right?
					</h1>
					<p style={{ fontSize: '18px', fontWeight: '600' }}>
						<br />
						Appears the Vacancy ID for whatever job you were looking for is now
						unavailable or possibly doesn't exist! If you are sure this job is still
						available, you can navigate back to the{' '}
						<Link href={`${window.location.origin}/careers?scroll-to=vacancies`}>
							Jobs Search Portal
						</Link>{' '}
						on our Careers page to have a look for it.
						<br />
						Alternatively, you can go back to our home page if you would prefer
						that.
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
