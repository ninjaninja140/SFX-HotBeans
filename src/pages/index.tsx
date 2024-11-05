import Hero from '@components/Homepage/Hero';
import Hero2 from '@components/Homepage/Hero2';
import Route from '@components/Meta/Route';

export default (PageConfig: { Location: string; Description?: string }) => {
	console.log('Hello from /');
	return (
		<div>
			<Route Location={PageConfig.Location} Description={PageConfig.Description} />
			<Hero />
			<Hero2 />
		</div>
	);
};

