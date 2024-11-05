import '@css/application.css';
import Router from '@src/router';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from '@components/Meta/Head';
import '@css/application.css';

const Application = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div style={{ paddingTop: isScrolled ? '63px' : '83px' }}>
			<Router />
		</div>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Head />
		<Header />
		<Application />
		<Footer />
	</React.StrictMode>
);

