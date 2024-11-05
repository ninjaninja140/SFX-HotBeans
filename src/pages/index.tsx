import Header from '@components/Header';
import Hero from '@components/Homepage/Hero';
import Route from '@components/Meta/Route';

export default (PageConfig: { Location: string; Description?: string }) => {
	console.log('Hello from /');
	return (
		<div>
			<Route Location={PageConfig.Location} Description={PageConfig.Description} />
			<Hero />
			<div style={{ height: '200vh' }}></div>
		</div>
	);
};
