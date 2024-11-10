import Banner from '@components/Banner';
import Hero from '@components/Homepage/DesignMadeEasy';
import Hero2 from '@components/Homepage/FairPrices';
import Hero3 from '@components/Homepage/OurDevelopers';
import Hero4 from '@components/Homepage/Trusted';
import Route from '@components/Meta/Route';
import { useEffect, useState } from 'react';

export default (PageConfig: { Location: string; Description?: string }) => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div>
			<Route Location={PageConfig.Location} Description={PageConfig.Description} />
			<div
				style={{
					height: `calc(100vh - ${isScrolled ? '55px' : '75px'} - 8px)`,
					justifyContent: 'center',
					alignItems: 'center',
					justifyItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
				}}>
				<h1 style={{ margin: '0' }}>HotBeans Website Development</h1>
				<h2 style={{ margin: '0' }}>Professional Web Developers, at your arsenal!</h2>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div style={{ display: 'flex', gap: '18px' }}>
					<button className='blurple-button'>Get a Quote</button>
					<button className='blurple-button'>Contact Us</button>
				</div>
			</div>
			<Hero />
			<Hero2 />
			<Banner />
			<Hero3 />
			<Hero4 />
		</div>
	);
};
