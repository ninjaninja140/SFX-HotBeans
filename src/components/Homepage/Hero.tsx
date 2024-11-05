import Underline from '@components/Text/Underline';
import { useEffect, useState } from 'react';
import { IoCodeSlash } from 'react-icons/io5';

export default () => {
	const defaults: React.CSSProperties = {
		flex: '1',
	};

	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div style={{ height: `calc(100vh - ${isScrolled ? '55px' : '75px'} - 8px)`, display: 'flex' }}>
			<div
				style={{
					...defaults,
					paddingLeft: '14.5%',
					justifyContent: 'flex-end',
					alignItems: 'center',
					justifyItems: 'center',
					alignSelf: 'center',
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
					you want it. Working with HotBeans puts you alongside a team of trained
					developers who will be able to assist you in designing and creating the website
					of your image.
				</p>
			</div>
			<div
				style={{
					...defaults,
					paddingRight: '14.5%',
					paddingLeft: '14.5%',
					justifyContent: 'flex-start',
					alignItems: 'left',
					textAlign: 'left',
				}}>
				<IoCodeSlash fill='#5865f2' style={{ height: '100%', width: '100%' }} />
			</div>
		</div>
	);
};

