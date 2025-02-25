import Banner from '@components/Banner';
import { Gradient } from '@components/Gradient';
import Route from '@components/Meta/Route';
import Hero1 from '@components/PageComponents/Homepage/DesignMadeEasy';
import Hero2 from '@components/PageComponents/Homepage/FairPrices';
import Hero3 from '@components/PageComponents/Homepage/OurDevelopers';
import Hero4 from '@components/PageComponents/Homepage/Trusted';
import ScrollTo from '@utilities/ScrollTo';
import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

export default () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useLayoutEffect(() => {
		const gradient = new Gradient();
		//@ts-ignore
		gradient.initGradient('#gradient-canvas');
	}, []);

	return (
		<Fragment>
			<Route Location={'Home'} />
			<ScrollTo />

			<div
				style={{
					height: `calc(100vh - ${isScrolled ? '55px' : '75px'} - 8px)`,
					justifyContent: 'center',
					alignItems: 'center',
					justifyItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
				}}>
				<canvas id='gradient-canvas' data-transition-in='true' width='100%' height='100%' />
				<h1 style={{ margin: '0', color: 'white' }}>HotBeans Website Development</h1>
				<h2 style={{ margin: '0', color: 'white' }}>
					Professional Web Developers, at your arsenal!
				</h2>
				<div
					style={{
						display: 'flex',
						gap: '18px',
						marginTop: '40px',
						justifyContent: 'center',
						alignItems: 'center',
						justifyItems: 'center',
						alignContent: 'center',
						textAlign: 'center',
					}}>
					<button
						className='white-button'
						onClick={() =>
							(window.location.href = `/contact?subject-ref=Website%20Quote%20-%20${new Date().toLocaleDateString()}&scroll-to=contact-us-here`)
						}>
						Get a Quote
					</button>
					<button
						className='white-button'
						onClick={() => (window.location.href = '/contact')}>
						Contact Us
					</button>
				</div>
				<IoChevronDown
					style={{
						color: 'white',
						height: '30px',
						width: '100%',
						marginTop: '40px',
						cursor: 'pointer',
					}}
					onClick={() => {
						var el = document.getElementById('DesignMadeEasy');
						el!.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
							inline: 'center',
						});
					}}
				/>
			</div>
			<Hero1 />
			<Hero2 />
			<Banner />
			<Hero3 />
			<Hero4 />
			<div
				style={{
					height: '60vh',
					justifyContent: 'center',
					alignItems: 'center',
					justifyItems: 'center',
					alignContent: 'center',
					textAlign: 'center',
					paddingLeft: '15%',
					paddingRight: '15%',
				}}>
				<h1 style={{ margin: '0' }}>There's nothing more to see here...</h1>
				<h2 style={{ margin: '0' }}>Well, there is technically, it's a form to get a quote!</h2>
				<br />
				<br />
				<br />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						justifyItems: 'center',
						alignContent: 'center',
						textAlign: 'center',
					}}>
					<button
						style={{ width: '350px' }}
						className='inverted-button blurple-button-border'
						onClick={() =>
							(location.href = `/contact?subject-ref=Website%20Quote%20-%20${new Date().toLocaleDateString()}&scroll-to=contact-us-here`)
						}>
						Get a Website Quote Today!
					</button>
				</div>
			</div>
		</Fragment>
	);
};
