import Header from '@components/Header';
import Route from '@components/Meta/Route';

export default (PageConfig: { Location: string; Description?: string }) => {
	console.log('Hello from /');
	return (
		<div>
			<Route Location={PageConfig.Location} Description={PageConfig.Description} />
			<Header />
		</div>
	);
};

