import { IoPeople } from 'react-icons/io5';

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
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					alignSelf: 'center',
					textAlign: 'left',
				}}>
				<h1>A team worth working with...</h1>
				<p>
					At HotBeans Website Development, you work alongside our developers to create the
					website of your image. In our website development package, you receive 24/7
					access to the developers and designers working on your website, plus design and
					development advisors to help guide you through what is and isn't possible.
					<br />
					<br />
					In the process of developing your site, both you, the developers, advisors and
					designers tasked with working with you on your website work together and
					collaborate to create the site you want, no funny business, no hassle. Our best
					interest is making sure that your site looks exactly how you want it and working
					with you until you are happy with the site that has been created in your image.
				</p>
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
					style={{ height: '100%', width: '100%' }}
				/>
			</div>
		</div>
	);
};

