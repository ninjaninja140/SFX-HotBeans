import RouteTags from '@components/Meta/Route';
import { useLayoutEffect } from 'react';
import { Gradient } from './Gradient';

export default () => {
	useLayoutEffect(() => {
		const gradient = new Gradient();
		//@ts-ignore
		gradient.initGradient('#gradient-canvas');
	}, []);

	return (
		<div>
			<RouteTags Location={'Loading...'} />

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
				}}>
				<div style={{ textAlign: 'left' }}>
					<canvas
						id='gradient-canvas'
						data-transition-in='true'
						width='100%'
						height='100%'
					/>

					<h1
						style={{
							fontWeight: '800',
							padding: '0',
							margin: '0',
							color: 'white',
						}}>
						Something cool is on its way...
					</h1>
					<p style={{ fontSize: '18px', color: 'white' }}>
						<br />
						We're just loading it for you, that's all!
					</p>
				</div>
			</div>
		</div>
	);
};
