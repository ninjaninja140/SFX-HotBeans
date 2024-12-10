import Route from '@components/Meta/Route';
import Hero from '@components/PageComponents/About/Title';
import Section from '@components/Section';

export default () => {
	return (
		<div>
			<Route Location='About us' />
			<Hero />

			<Section title='Who are we?' style={{ fontSize: '17x' }}>
				HotBeans Website Development is a software development company, however, not your
				average run-of-the-mill Web Dev company, as in a single development package, HotBeans
				will provide the services you would never think to see when you come to a website design
				company.
				<br />
				<br />
				Here at HotBeans, we try to give out customers the best service and package deals
				possible, to retain our current customer-base and entice new customers into joining our
				ever-growing customer-base with our spectacular service and great deals, with our
				website development packages and our hosting packages.
			</Section>
		</div>
	);
};
