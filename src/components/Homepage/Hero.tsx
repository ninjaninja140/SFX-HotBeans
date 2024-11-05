import Underline from '@components/Text/Underline';

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};
	return (
		<div style={{ height: '100vh', display: 'flex' }}>
			<div
				style={{
					...defaults,
					paddingLeft: '300px',
					justifyContent: 'flex-end',
					alignItems: 'center',
					textAlign: 'left',
				}}>
				<h1>Website Design made easy...</h1>
				<p>
					With HotBeans, we cut out the annoying, gruelling task of designing a website
					from scratch or with a website builder that does everything but what you want is
					cut out and is replaced with the ability to get hands on beside our developers
					in the creation of your website. Here at HotBeans Website Development, you work
					with our developers to create the site <Underline>you</Underline> want. Removing
					the hassle with web-based website development tools, you work with real people
					designers and real developers to have a fully bespoke website made in the image
					you want it.
				</p>
			</div>
			<div
				style={{
					...defaults,
					paddingRight: '300px',
					justifyContent: 'flex-start',
					alignItems: 'left',
					textAlign: 'left',
				}}></div>
		</div>
	);
};
